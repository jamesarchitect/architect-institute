"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { ImageViewer } from "@/components/dialogues/image-viewer";
import {
  dialoguesImages,
  type DialoguesImage,
} from "@/lib/dialogues/images";

type Align = "left" | "center" | "right";
type Width = "full" | "hero" | "large" | "offset";

type SoloLayout = {
  type: "solo";
  index: number;
  width: Width;
  align: Align;
};

type PairLayout = {
  type: "pair";
  indices: [number, number];
};

type Row = SoloLayout | PairLayout;

/** Editorial rhythm across all 21 photographs in chronological order. */
const ROWS: Row[] = [
  { type: "solo", index: 0, width: "full", align: "center" },
  { type: "pair", indices: [1, 2] },
  { type: "solo", index: 3, width: "offset", align: "right" },
  { type: "solo", index: 4, width: "hero", align: "center" },
  { type: "pair", indices: [5, 6] },
  { type: "solo", index: 7, width: "offset", align: "left" },
  { type: "solo", index: 8, width: "large", align: "center" },
  { type: "pair", indices: [9, 10] },
  { type: "solo", index: 11, width: "offset", align: "right" },
  { type: "solo", index: 12, width: "hero", align: "center" },
  { type: "pair", indices: [13, 14] },
  { type: "solo", index: 15, width: "offset", align: "left" },
  { type: "solo", index: 16, width: "large", align: "center" },
  { type: "pair", indices: [17, 18] },
  { type: "solo", index: 19, width: "offset", align: "right" },
  { type: "solo", index: 20, width: "hero", align: "center" },
];

function soloClass(width: Width, align: Align): string {
  const widths: Record<Width, string> = {
    full: "w-full",
    hero: "w-full md:w-[88%] lg:w-[90%]",
    large: "w-[92%] md:w-[80%] lg:w-[82%]",
    offset: "w-[88%] md:w-[62%] lg:w-[58%]",
  };

  const aligns: Record<Align, string> = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto max-md:mx-auto",
  };

  // On mobile, left-aligned offsets stay gently inset via width; right uses mx-auto above.
  const mobileAlign =
    align === "left" && width === "offset" ? "max-md:ml-0 max-md:mr-auto" : "";

  return `${widths[width]} ${aligns[align]} ${mobileAlign}`.trim();
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function MontageFigure({
  image,
  priority,
  className,
  reducedMotion,
  onSelect,
}: {
  image: DialoguesImage;
  priority?: boolean;
  className?: string;
  reducedMotion: boolean;
  onSelect: (image: DialoguesImage) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Reveal early so the page never feels empty while scrolling.
      { rootMargin: "120px 0px 180px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onSelect(image)}
      aria-label={image.alt}
      className={`dialogues-montage-figure cursor-pointer border-0 bg-transparent p-0 ${className ?? ""} ${
        visible ? "is-visible" : ""
      } ${reducedMotion ? "dialogues-montage-static" : ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 90vw"
        className="block h-auto w-full"
      />
    </button>
  );
}

export function Montage() {
  const [selectedImage, setSelectedImage] = useState<DialoguesImage | null>(
    null,
  );
  const reducedMotion = usePrefersReducedMotion();

  const handleSelect = useCallback((image: DialoguesImage) => {
    setSelectedImage(image);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <>
      <section
        className="dialogues-montage w-full pb-8 md:pb-16"
        aria-label="Digital Risk Dialogues photography"
      >
        <div className="flex flex-col gap-12 md:gap-20 lg:gap-28">
          {ROWS.map((row, rowIndex) => {
            if (row.type === "pair") {
              const [a, b] = row.indices;
              const left = dialoguesImages[a];
              const right = dialoguesImages[b];
              if (!left || !right) return null;

              return (
                <div
                  key={`pair-${a}-${b}`}
                  className="flex flex-col gap-12 px-0 md:flex-row md:items-start md:gap-6 md:px-8 lg:gap-10 lg:px-14"
                >
                  <MontageFigure
                    image={left}
                    priority={rowIndex < 2}
                    reducedMotion={reducedMotion}
                    onSelect={handleSelect}
                    className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.25rem)]"
                  />
                  <MontageFigure
                    image={right}
                    priority={rowIndex < 2}
                    reducedMotion={reducedMotion}
                    onSelect={handleSelect}
                    className="w-[88%] self-end md:mt-20 md:w-[calc(50%-0.75rem)] md:self-start lg:mt-28 lg:w-[calc(50%-1.25rem)]"
                  />
                </div>
              );
            }

            const image = dialoguesImages[row.index];
            if (!image) return null;

            return (
              <div
                key={image.src}
                className={
                  row.width === "full" ? "px-0" : "px-0 md:px-8 lg:px-14"
                }
              >
                <MontageFigure
                  image={image}
                  priority={rowIndex < 2}
                  reducedMotion={reducedMotion}
                  onSelect={handleSelect}
                  className={soloClass(row.width, row.align)}
                />
              </div>
            );
          })}
        </div>
      </section>

      <ImageViewer image={selectedImage} onClose={handleClose} />
    </>
  );
}
