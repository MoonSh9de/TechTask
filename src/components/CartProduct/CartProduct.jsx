import React from "react";

import './CartProduct.css'

import cartProducts from '../../cart_products.js'

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
                    <img src={minusImage} alt="" />
                    <span className="quantity__number">1</span>
                    <img  src={plusImage} alt="" />
                </div>
            </div>
            <div className="product__about">
                <h3 className="product__name">{cartProduct.title}</h3>
                <p className="product__price">{cartProduct.price} ₽</p>
            </div>
        </div>
        <div className="product__column product__column--second">
            <div className="product__delete" >
                <img src={deleteImage} alt="" />
            </div>
            <p className="product__result">2 927 ₽</p>
        </div>
    </div>

    )
};

export default CartProduct;