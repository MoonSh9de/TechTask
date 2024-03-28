import React from "react";
import CartProduct from "../CartProduct/CartProduct.jsx"

const CartList = (props) => {
    const cartProducts = Array.isArray(props.cartProducts) ? props.cartProducts : [];
    return (
        <div className="cart__column">
            {cartProducts.map(cartProduct => (
                <CartProduct key={cartProduct.id} cartProduct = {cartProduct}/>
            ))}
        </div>

    )
};

export default CartList;