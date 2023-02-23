import React from 'react'
import styles from "./MealCard.module.css"
import { Heading, Link } from "@chakra-ui/react";

function MealCard({image, title, desc, price,}) {
  return (
    <div className={styles.container}>
            <img src={image} alt="product image" />
            <Link to="#"><Heading size="3*l">{title}</Heading></Link>
            <p>{desc}</p>
            <span>$<span>{price}</span></span>
        </div>
  )
}

export {MealCard}