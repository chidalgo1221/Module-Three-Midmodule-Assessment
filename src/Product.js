import React from "react"
import formatPrice from "./helpers/formatPrice"

const Product = ({name, price, img, description, addingToCart}) => {
    return(
        <li>
            <h2>{name}</h2>
            <p> Price: {formatPrice(price)}</p>
            <button onClick= {() => addingToCart({name, price})}>Add To Cart</button>
            <img src={img} alt="items"/>
            <p>{description}</p>
        </li>
    )
}

export default Product