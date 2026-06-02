import React from "react";

export default function Product({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <span>12 Products</span>

    </div>
  );
}