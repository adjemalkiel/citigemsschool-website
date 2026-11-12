import {
  ogAlt,
  ogContentType,
  ogSize,
  renderOgPreview,
} from "@/lib/og-preview";

export const runtime = "nodejs";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function TwitterImage() {
  return renderOgPreview();
}
