import React from "react"
import Product from "./Product"
import productData from "./data/productData"
import "./Products.css"

const Products = ({addingToCart}) => {
    const items = productData.map(item =>{
        return <Product 
        addingToCart={addingToCart}
         name = {item.name} 
         price = {item.price} 
         img= {item.img} 
         description= {item.description}
          key = {item.id}
          />
    })

    return(
        <section className="Products">
            <h1>My Garage Sale</h1>
            <ul>
                {items}
            </ul>
        </section>
    )
    }

    export default Products;