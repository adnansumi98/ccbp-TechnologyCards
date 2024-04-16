import React from 'react'
import './index.css'

const CardItem = props => {
  const {cardObject} = props
  const {title, description, imgUrl, className} = cardObject
  console.log(title, description, imgUrl, className)
  return (
    <li className={`card ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
