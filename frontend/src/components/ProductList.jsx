import React from "react";

import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div className="products-grid">

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}