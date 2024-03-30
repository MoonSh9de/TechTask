import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import './HeaderContent.css';
import '../../styles/fonts.css'

import HeadphonesCard from "../HeadphonesProduct/HeadphonesProduct.jsx";
import Container from "../Container/Container";

import favoriteImage from "../../images/header/favorite.svg";


import { useSelector } from 'react-redux'
import CartButton from "../UI/CartButton.jsx";

const HeaderContent = () => {
     const cartAmount = useSelector(state => state.cart ? state.cart.itemsAmount : 0);

    return (
        <Container>
            <header>
                <Link to="/general" className="logo" id="logo">
                    <h1>Qpick</h1>
                </Link>
                <div className="header__items">
                    <div className="header__item header__item--favorite">
                        <Link to="/general">
                            <img style={{ marginBottom: '5px' }} src={favoriteImage} />
                        </Link>
                        <p className="header__counter header__counter--favorite">4</p>
                    </div>
                    <CartButton counter={cartAmount}></CartButton>

                </div>
            </header>
        </Container>

    )
};

export default HeaderContent;