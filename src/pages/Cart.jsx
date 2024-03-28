import React from "react";
import Container from "../components/Container/Container";
import HeaderContent from "../components/HeaderContent/HeaderContent";
import CartMainContent from "../components/СartMainContent/CartMainContent";
import CartFooterContent from "../components/CartFooterContent/CartFooterContent";

const Cart = () => {
    return (
    <React.Fragment>
        <HeaderContent/>
        <CartMainContent/>
        <CartFooterContent/>
    </React.Fragment>

    )
};

export default Cart;