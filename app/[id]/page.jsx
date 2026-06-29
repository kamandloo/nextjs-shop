import Link from "next/link";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="product-detail">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <h5>{product.rating.rate}</h5>
      <p>{product.price}</p>
      <Link href={"/"} className="product-btn">
        Back to shop
      </Link>
    </div>
  );
}
