"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { ImageViewer } from "@/components/dialogues/image-viewer";
import {
  dialoguesImages,
  type DialoguesImage,
} from "@/lib/dialogues/images";

const DESKTOP_SPEED = 0.18;
const MOBILE_SPEED = 0.12;
const DRAG_THRESHOLD_PX = 6;

function FilmstripImage({
  image,
  priority,
  onSelect,
  dragDistanceRef,
}: {
  image: DialoguesImage;
  priority?: boolean;
  onSelect: (image: DialoguesImage) => void;
  dragDistanceRef?: React.RefObject<number>;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if ((dragDistanceRef?.current ?? 0) > DRAG_THRESHOLD_PX) return;
        onSelect(image);
      }}
      className="dialogues-filmstrip-item shrink-0 cursor-pointer border-0 bg-transparent p-0"
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        draggable={false}
        className="dialogues-filmstrip-image block h-[60vh] max-h-[70vh] w-auto max-w-none md:h-[62vh] lg:h-[65vh]"
        sizes="(max-width: 768px) 78vw, 65vh"
      />
    </button>
  );
}

function StaticFilmstrip({
  images,
  onSelect,
}: {
  images: DialoguesImage[];
  onSelect: (image: DialoguesImage) => void;
}) {
  return (
    <div className="dialogues-filmstrip-static overflow-x-auto">
      <div className="flex w-max gap-[10px] px-0">
        {images.map((image, index) => (
          <FilmstripImage
            key={image.src}
            image={image}
            priority={index < 2}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedFilmstrip({
  images,
  onSelect,
}: {
  images: DialoguesImage[];
  onSelect: (image: DialoguesImage) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(DESKTOP_SPEED);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });
  const dragDistanceRef = useRef(0);
  const loopWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const sequence = [...images, ...images];

  const applyTransform = useCallback(() => {
    if (!innerRef.current) return;

    const loopWidth = loopWidthRef.current;
    if (loopWidth > 0) {
      while (offsetRef.current <= -loopWidth) {
        offsetRef.current += loopWidth;
      }
      while (offsetRef.current > 0) {
        offsetRef.current -= loopWidth;
      }
    }

    innerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  }, []);

  const measureLoop = useCallback(() => {
    if (!innerRef.current) return;
    loopWidthRef.current = innerRef.current.scrollWidth / 2;
  }, []);

  useEffect(() => {
    const updateSpeed = () => {
      speedRef.current =
        window.innerWidth < 768 ? MOBILE_SPEED : DESKTOP_SPEED;
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  useEffect(() => {
    measureLoop();

    const observer = new ResizeObserver(measureLoop);
    if (innerRef.current) observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, [measureLoop, sequence.length]);

  useEffect(() => {
    const animate = () => {
      if (
        !isDraggingRef.current &&
        !isHoveredRef.current &&
        loopWidthRef.current > 0
      ) {
        offsetRef.current -= speedRef.current;
        applyTransform();
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [applyTransform]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    dragStartRef.current = {
      x: event.clientX,
      offset: offsetRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const delta = event.clientX - dragStartRef.current.x;
    dragDistanceRef.current = Math.max(dragDistanceRef.current, Math.abs(delta));
    offsetRef.current = dragStartRef.current.offset + delta;
    applyTransform();
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={trackRef}
      className="dialogues-filmstrip-track overflow-hidden touch-pan-y"
      onPointerEnter={() => {
        isHoveredRef.current = true;
      }}
      onPointerLeave={() => {
        isHoveredRef.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={innerRef}
        className="dialogues-filmstrip-inner flex w-max gap-[10px] will-change-transform"
      >
        {sequence.map((image, index) => (
          <FilmstripImage
            key={`${image.src}-${index}`}
            image={image}
            priority={index < 2}
            onSelect={onSelect}
            dragDistanceRef={dragDistanceRef}
          />
        ))}
      </div>
    </div>
  );
}

export function Filmstrip() {
  const [selectedImage, setSelectedImage] = useState<DialoguesImage | null>(
    null,
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const handleSelect = useCallback((image: DialoguesImage) => {
    setSelectedImage(image);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <section
        className="dialogues-filmstrip-section w-full overflow-hidden py-6 md:py-8"
        aria-label="Digital Risk Dialogues photography"
      >
        {prefersReducedMotion ? (
          <StaticFilmstrip
            images={dialoguesImages}
            onSelect={handleSelect}
          />
        ) : (
          <AnimatedFilmstrip
            images={dialoguesImages}
            onSelect={handleSelect}
          />
        )}
      </section>

      <ImageViewer image={selectedImage} onClose={handleClose} />
    </>
  );
}
