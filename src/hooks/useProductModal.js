import { useState } from 'react';

export function useProductModal() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const open = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const close = () => setSelectedProduct(null);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return { selectedProduct, quantity, open, close, increment, decrement };
}
