import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { CartContext } from "../Context/CartProvider";

const ProductCard = ({ product }) => {
  const { available } = useContext(CartContext);
  const { prices, name, localFiles, id, slug } = product;

  const availablePrices = prices.filter(({ id }) => available(id));
  const soldOut = !availablePrices.length;

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100">
      <Link to={`/buy/${slug}`}>
        <div className="divide-y divide-gray-200 divide-solid">
          <div className="bg-blue-300">
            {localFiles && (
              <GatsbyImage
                image={localFiles[0].childImageSharp.gatsbyImageData}
                alt={name}
                imgStyle={{ filter: soldOut && "grayscale()" }} />
            )}
          </div>
          <div className="p-4">
            <h1 className="text-2xl text-blue-500 font-bold leading-snug">
              {name}
            </h1>
          </div>
          <div className="p-4">
            <p className="text-base text-blue-900 mb-5 font-medium">
              {soldOut ? "Sold Out" : `$${prices[0].unit_amount / 100}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
