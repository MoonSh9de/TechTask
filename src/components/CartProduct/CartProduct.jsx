import React from "react";

import './CartProduct.css'

import plusImage from "../../images/cart_main/plus.svg"
import minusImage from "../../images/cart_main/minus.svg"
import deleteImage from "../../images/cart_main/delete.svg"

const CartProduct = (props) => {
    const cartProduct = props.cartProduct;

    return (
        <div className="product">
        <div className="product__column--first">
            <div className="product__info">
                <img className="product__image" src={cartProduct.img} alt="" />
                <div className="quantity">
                    <button className="btn__decrement">
                        <img src={minusImage} alt="" />
                    </button>
                    <span className="quantity__number">1</span>
                    <button className="btn__increment">
                        <img src={plusImage} alt="" />
                    </button>
                </div>
            </div>
            <div className="product__about">
                <h3 className="product__name">{cartProduct.title}</h3>
                <p className="product__price">{cartProduct.price} ₽</p>
            </div>
        </div>
        <div className="product__column product__column--second">
            <div className="product__delete" >
                <button className="btn__delete">
                    <img src={deleteImage} alt="" />
                </button>
            </div>
            <p className="product__result">2 927 ₽</p>
        </div>
    </div>

    )
};

export default CartProduct;