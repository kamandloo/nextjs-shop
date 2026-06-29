"use client";

import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

export default function Home() {
  const divLoader = useRef(null);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const limit = 4;

  const fetchProduct = async () => {
    if (loading) return;

    setLoading(true);

    const res = await fetch(`https://fakestoreapi.com/products`);

    const data = await res.json();

    const start = (page - 1) * limit;
    const end = page * limit;

    const newItems = data.slice(start, end);

    if (newItems.length === 0) {
      setHasMore(false);
      setLoading(false);
    }

    setProducts((prev) => [...prev, ...newItems]);

    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "400px",
      },
    );

    if (divLoader.current) {
      observer.observe(divLoader.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="main">
      <ProductList products={products} />

      <div ref={divLoader} className="loading">
        {loading && hasMore && "Loading..."}
      </div>
    </div>
  );
}
