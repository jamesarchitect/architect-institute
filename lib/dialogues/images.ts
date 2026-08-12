import manifest from "@/lib/dialogues/manifest.json";

export type DialoguesImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const dialoguesImages: DialoguesImage[] = manifest.images;

export const dialoguesOgImage = manifest.ogImage;
