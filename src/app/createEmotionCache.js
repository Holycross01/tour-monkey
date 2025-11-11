"use client";
// specifically for Hydration mismatch warnings
import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}
