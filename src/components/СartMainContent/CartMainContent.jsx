import React, { useMemo } from "react";
import Container from "../Container/Container";

import CartList from "../CartList/CartList";

import { useSelector } from "react-redux";

import {
    makeSelectFilteredProducts,
    makeSelectTotalCost,
} from "../../features/selectors";

import "./CartMainContent.css"



const CartMainContent = () => {

    const items = (state) => state.cart.items;

    const itemsId = useSelector(items).reduce((acc, item) => {
        acc.push(item.id);
        return acc;
    }, []);

    const selectFilteredProducts = useMemo( () =>
        makeSelectFilteredProducts(),
    []);

    const products = useSelector((state) =>
        selectFilteredProducts(state, itemsId)
    );
    const total_cost = useSelector(makeSelectTotalCost());

    return (
        <Container>
            <main>
                <h2 className="cart__title">Корзина</h2>
                <section className="cart__content">
              <CartList products={products}/>
                <div className="cart__column">
                    <div className="formalization">
                        <div className="cart__result">
                            <p>Итого</p>
                            <p className="result__number">{total_cost} ₽</p>
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