import "./App.css";
import React, {Component} from "react";
import Products from "./Products";
import Cart from "./Cart";
import formatPrice from "./helpers/formatPrice";
import Checkout from "./Checkout";

class App extends Component{
  state = { cart: [] };

  addingToCart = (product) =>{
    this.setState((prevState) =>({cart: [...prevState.cart, product]}))
  };

  tax = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach((product) =>{
      sum += product.price;
    })
    return formatPrice(sum * 0.05)
  }

  subTotal = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach((product) => {
      sum += product.price;
    })
    return formatPrice(sum)
  }

  total = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach((product) => {
      sum += product.price;
    })
    const tax = sum * 0.05
    const subTotal = sum
    return subTotal + tax
  }

  render(){
    const subTotal = this.subTotal()
    const total = this.total()
    const tax = this.tax()
    const {cart} = this.state;
    return (
      <main>
        <Products formatPrice={formatPrice} addingToCart={this.addingToCart}/>
        <Cart formatPrice={formatPrice} cart={cart} subTotal={subTotal} tax={tax} total={total}/>
        <Checkout total={total}/>
      </main>
    )

  }

}

export default App;
