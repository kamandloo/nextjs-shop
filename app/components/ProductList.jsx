import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div>
      <ul className="main-menu">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </div>
  );
}
