import { useState } from 'react';

export function useCarousel(totalItems, itemsPerPage = 4) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const next = () => setIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));

  return { index, itemsPerPage, next, prev };
}
