import React from "react";
import formatPrice from "./helpers/formatPrice";

const Cart = ({cart ,  subTotal, tax, total}) => {
    return(
        <section>
            <h1>Cart</h1>
            <ul className="Cart">
                {cart.map((item)=>{
                    const{name, price, id} = item
                    return(
                        <li key={id}>
                            {name}: {formatPrice(price)}
                        </li>
                    )
                })}
            </ul>
            <h2>Subtotal: {subTotal}</h2>
            <h2>Tax: {tax}</h2>
            <h2>Total: {formatPrice(total)}</h2>
        </section>
    )
}

export default Cart;