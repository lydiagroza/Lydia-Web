import { ogSize, renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "Lydia Groza — Web Development";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
