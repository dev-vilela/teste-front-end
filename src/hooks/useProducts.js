import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchProducts().then((list) => {
      if (!active) return;
      setProducts(list);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  return { products, loading };
}
