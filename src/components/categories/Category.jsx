import React from "react"
import "./card.css"

function Category({ icon: Icon, heading, description }) {
  return (
    <div className="card">
      <div className="icon">
        <Icon size={48} />
      </div>
      <div className="text">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Category
