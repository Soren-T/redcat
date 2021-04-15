import React from "react"

import StoreLayout from "../components/Layout/StoreLayout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <StoreLayout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>But you did fing Red Cat</p>
  </StoreLayout>
)

export default NotFoundPage
