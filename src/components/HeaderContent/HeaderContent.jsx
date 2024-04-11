import React, { useRef } from "react";
import { Link } from 'react-router-dom';
//Components
import HeadphonesCard from "../HeadphonesProduct/HeadphonesProduct.jsx";
import Container from "../Container/Container";

import Logo from "../UI/LogoUI/Logo.jsx";
//Css
import './HeaderContent.css';
import '../../styles/fonts.css'

//Images
import favoriteImage from "../../images/header/favorite.svg";
import cartImage from "../../images/header/cart.svg";



const HeaderContent = () => {
    return (
        <Container>
            <header>
            <Logo/>
                <div className="header__items">
                    <div className="header__item header__item--favorite">
                        <Link to="/general">

                            <img style={{ marginBottom: '5px' }} src={favoriteImage} />
                        </Link>
                        <p className="header__counter header__counter--favorite">4</p>
                    </div>
                    <div className='header__item'>
                        <Link to="/cart">
                            <img src={cartImage} />
                        </Link>

                        <p className="header__counter header__counter--cart" id="cartCounter">4</p>
                    </div>

                </div>
            </header>
        </Container>

    )
};

export default HeaderContent;