import React from "react"
import Header from "./header/Header"
import "bootstrap/dist/css/bootstrap.min.css"

function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  )
}

export default Layout
