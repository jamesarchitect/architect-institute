import type { Metadata } from "next";

import { dialoguesOgImage } from "@/lib/dialogues/images";

import "./dialogues.css";

const description =
  "The Digital Risk Dialogues convene senior leaders across technology, national security, finance, policy and risk to improve the quality of judgement under uncertainty.";

const openGraphDescription =
  "The key to the future is the mastery of risk.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dialogues.architect.institute",
  ),
  title: "Digital Risk Dialogues | The Architect Institute",
  description,
  openGraph: {
    title: "Digital Risk Dialogues",
    description: openGraphDescription,
    images: [
      {
        url: dialoguesOgImage,
        alt: "Digital Risk Dialogues at Lake Tahoe",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Risk Dialogues",
    description: openGraphDescription,
    images: [dialoguesOgImage],
  },
};

export default function DialoguesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dialogues-root min-h-screen bg-black text-[#f5f4ef]">
      {children}
    </div>
  );
}
