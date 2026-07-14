export const DEFAULT_SEO_IMAGE = "/images/artworks/artwork-1.jpg";

export function isSafeImageSrc(src: string | null | undefined): src is string {
  if (typeof src !== "string") {
    return false;
  }

  const value = src.trim();

  return value.length > 0 && (value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://"));
}

export function getSafeImageSrc(src: string | null | undefined, fallback = DEFAULT_SEO_IMAGE): string {
  return isSafeImageSrc(src) ? src : fallback;
}

export function getMetadataImages(src: string | null | undefined): string[] {
  return [getSafeImageSrc(src)];
}
