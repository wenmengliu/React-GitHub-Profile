import React from "react"
import Card from "./Card.js"

const CardList = (props) => {
  console.log(props)
  return (
  <div id="container" className="mt-10">
    {props.cards.map((card, index) => (
      <Card key = {index} {...card} />
    ))}
  </div>
  )
}

export default CardList