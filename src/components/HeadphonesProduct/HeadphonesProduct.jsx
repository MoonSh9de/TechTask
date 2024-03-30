import React, {useRef, useState} from "react";
import HeaderContent from "../HeaderContent/HeaderContent";

import './HeadphonesProduct.css';


import { useDispatch } from "react-redux";
import { addItemToCart, calculateTotal } from "../../features/CartSlice.js";


import star from "../../images/main/star.svg";

const HeadphonesProduct = ({product}) => {
    const dispatch = useDispatch();


    return (
        <div className="headphones__item">
        <div className="headphones__image">
            <img className="headphones__image--inner" src={product.img} alt="" />
        </div>
        <div className="headphones__about">
            <div className="headphones__column">
                <h3 className="headphones__name">{product.title}</h3>
                <div className="rating">
                    <img className="star" src={star} alt="#star" />
                   <span className = "rating__text">{product.rate}</span>
                </div>
            </div>
            <div className="headphones__column">
                <p className="price">{product.price} ₽</p>
                <p style={{ display: product.discountStatus}} className="discount">{product.oldPrice} ₽</p>
                <button className="btn__buy" /*onClick={buyClick} */ onClick = {() => dispatch(addItemToCart({id: product.id}))}>Купить</button>
            </div>
        </div>
    </div>

    )
};

export default HeadphonesProduct;