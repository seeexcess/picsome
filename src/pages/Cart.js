import React, { useContext, useState } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../Context"

function Cart() {
  const { cartItems, emptyCart, totalCost } = useContext(Context)
  const [orderText, setOrderText] = useState("Place Order")

  const CartEl = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  const total = totalCost().toLocaleString("en-US", {style: "currency", currency: "USD"})

  function placeOrder() {
    setOrderText("Order...")
    setTimeout(() => {
      console.log("Order Placed")
      setOrderText("Place Order")
      emptyCart([])
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      { CartEl }
      <p className="total-cost">Total: {total}</p>

      <div className="order-button">
        {
          cartItems.length > 0 ? <button onClick={placeOrder}>{orderText}</button> :
          <p>Yo! You have no item in your cart.</p>
        }
      </div>
    </main>
  )
}

export default Cart