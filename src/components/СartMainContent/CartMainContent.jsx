import React from "react";
import Container from "../Container/Container";
import CartList from "../CartList/CartList";

import "./CartMainContent.css"

import cartProducts from "../../cart_products.js";


const CartMainContent = () => {

    return (
        <Container>
            <main>
                <h2 className="cart__title">Корзина</h2>
                <section className="cart__content">
                    <CartList cartProducts = {cartProducts}/>

                    <div className="cart__column">
                        <div className="formalization">
                            <div className="cart__result">
                                <p>Итого</p>
                                <p className="result__number">2 927 ₽</p>
                            </div>
                            <button className="cart__btn">Перейти к оформлению</button>
                        </div>
                    </div>
                </section>
            </main>

        </Container>


    )
};

export default CartMainContent;