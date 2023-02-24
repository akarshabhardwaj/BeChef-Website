import React from 'react'
import styles from "./MealCard.module.css"
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MealCard({id, image, title, desc, price,}) {
  return (
    <div className={styles.container}>
            <Link to={id}><img src={image} alt="product image" /></Link>
            <Link to={id}><Heading size="3*l">{title}</Heading></Link>
            <p>{desc}</p>
            <span>$<span>{price}</span></span>
        </div>
  )
}

export {MealCard}
