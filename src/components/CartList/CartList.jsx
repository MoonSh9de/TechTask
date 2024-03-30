import React, { useMemo } from "react";
import CartProduct from "../CartProduct/CartProduct"

import { useSelector } from "react-redux";

import { makeSelectFilteredProducts } from "../../features/selectors";

const CartList = ({products}) => {

    return (
        <div className="cart__column">
            {products.map(products => (
                <CartProduct key={products.id} cartProduct={products}/>
            ))}
        </div>

    )
};

export default CartList;