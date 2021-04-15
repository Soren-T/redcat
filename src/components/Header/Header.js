import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import * as css from "./Header.module.css"
import Cart from "../Cart/Cart"

const Header = ({ cart }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={css.header}>
      <nav>
        <Link to="/" className={css.title}>
          {data.site.siteMetadata.title}
        </Link>
        <div className={css.links}>
          {cart && <Cart />}
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = { cart: PropTypes.bool.isRequired }

export default Header
