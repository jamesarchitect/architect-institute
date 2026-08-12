"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { ImageViewer } from "@/components/dialogues/image-viewer";
import { dialoguesImages } from "@/lib/dialogues/images";

export function PhotoGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const selectedImage =
    selectedIndex === null ? null : (dialoguesImages[selectedIndex] ?? null);

  return (
    <>
      <section
        className="mx-auto w-full max-w-[1400px] px-4 pb-16 md:px-6 md:pb-24"
        aria-label="Digital Risk Dialogues photography"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[22px]">
          {dialoguesImages.map((image, index) => {
            const isLast = index === dialoguesImages.length - 1;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={image.alt}
                className={`block w-full cursor-default border-0 bg-transparent p-0 ${
                  isLast ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index < 4}
                  sizes={
                    isLast
                      ? "(max-width: 768px) 100vw, 1400px"
                      : "(max-width: 768px) 100vw, 700px"
                  }
                  className="block h-auto w-full"
                />
              </button>
            );
          })}
        </div>
      </section>

      <ImageViewer image={selectedImage} onClose={handleClose} />
    </>
  );
}
