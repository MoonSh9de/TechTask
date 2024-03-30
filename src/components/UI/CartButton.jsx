import React from "react";
import { Link } from 'react-router-dom';
import cartImage from "../../images/header/cart.svg";

import "./CartButton.css"
const CartButton = ({children, counter}) => {
    return (
        <div className='header__item header__item--cart'>
        <Link to="/cart">
            <img src={cartImage} />
        </Link>
        {children}
        {counter ? (<p className="header__counter header__counter--cart" id="cartCounter">{counter}</p>) : null}
    </div>

    )
};

export default CartButton;