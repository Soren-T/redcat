import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/Header"
import ProductsProvider from "../Context/ProductsProvider"
import CartProvider from "../Context/CartProvider"
import * as css from "./StoreLayout.module.css"

const StoreLayout = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header cart />

        <main className={css.main}>{children}</main>

        <footer style={{ textAlign: "center", margin: "2rem 0" }}>
          <div className={css.footerIcons}>
            Cool Footer Stuff
          </div>
        </footer>
      </CartProvider>
    </ProductsProvider>
  )
}

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreLayout
