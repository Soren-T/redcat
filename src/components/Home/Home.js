import React, { useCallback, useContext, useState } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import * as _ from 'lodash';

import Filter from "./Filter";
import Products from "../Product/Products";

const Home = () => {
  const { listProducts } = useContext(ProductsContext);
  const products = listProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  // with array of tags sent from the Filter component filter the products to be displayed
  const filterProducts = useCallback(
    (activeTags) => {
      // if there are no tags don't try to filter
      if (!activeTags.length) {
        // if the original array of products and the filtered array
        // are the same length we can assume no update is needed
        if (products.length !== filteredProducts.length) {
          setFilteredProducts(products);
        }
      } else {
        let newFilter = products.slice();
        newFilter = newFilter.filter(n => {
          let match = false;
          n.tag__from_Tags_.forEach(t => {
            if (activeTags.indexOf(t) !== -1) match = true;
          });
          return match;
        });
        // order matters for differenceBy so always compare against the larger array.
        // in other words larger array goes first.
        const diff = newFilter.length > filteredProducts.length
          ? _.differenceBy(newFilter, filteredProducts, 'slug').length
          : _.differenceBy(filteredProducts, newFilter, 'slug').length;
        if (diff > 0) {
          setFilteredProducts(newFilter);
        }
      }
    },
    [filteredProducts, products]
  );

  return (
    <div className="max-w-screen-lg container pt-6">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {/* <Filter filterProducts={filterProducts} /> */}
        <Products products={filteredProducts} />
      </div>
    </div>
  )
}

export default Home