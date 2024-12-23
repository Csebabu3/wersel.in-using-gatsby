import React from "react"
import Category from "./Category"
import { categoriesData } from "./categoriesData"

function Categories() {
  const categories = categoriesData.map((category, index) => (
    <Category
      key={index}
      icon={category.icon}
      heading={category.heading}
      description={category.description}
    />
  ))

  return <div className="cards">{categories}</div>
}

export default Categories
