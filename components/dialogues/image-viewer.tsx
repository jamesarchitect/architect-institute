"use client";

import Image from "next/image";
import { useEffect } from "react";

import type { DialoguesImage } from "@/lib/dialogues/images";

type ImageViewerProps = {
  image: DialoguesImage | null;
  onClose: () => void;
};

export function ImageViewer({ image, onClose }: ImageViewerProps) {
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl leading-none text-white/50 transition-colors hover:text-white/90"
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="relative max-h-[92vh] max-w-[96vw]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-auto max-h-[92vh] w-auto max-w-[96vw] object-contain"
          sizes="96vw"
          priority
        />
      </div>
    </div>
  );
}
