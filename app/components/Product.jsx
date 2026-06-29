"use client";

import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "@/app/contexts/CortContext";

export default function Product({ product }) {
  const { addToCart } = useContext(cartContext);

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to cart</button>

      <span>
        <Link href={`/${product.id}`} className="link">
          View more
        </Link>
      </span>
    </div>
  );
}
