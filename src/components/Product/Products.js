import React from "react";
import ProductCard from "./ProductCard";

const Items = ({ products }) => {
  return (
    <div className="container pt-6 overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {products.map(product => (
          <div 
            key={product.id}
            className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items
