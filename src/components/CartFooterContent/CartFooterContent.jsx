import React from "react";
import {Link} from 'react-router-dom';

import './CartFooterContent.css';

import languageImage from "../../images/footer/language.svg";
import vkImage from "../../images/footer/vk.svg";
import tgImage from "../../images/footer/telegram.svg";
import whatsappImage from "../../images/footer/whatsapp.svg";


const CartFooterContent = () => {
    return (

            <div className="container--footer container--cart_footer">
                <footer className="footer footer--cart">
                  <Link to="/general" className="logo"  id="logo">
                        <h2>Qpick</h2>
                    </Link>

                    <div className="footer__item">
                        <a href="#" className="footer__link">Избранное</a>
                        <a href="#" className="footer__link">Корзина</a>
                        <a href="#" className="footer__link">Контакты</a>
                    </div>
                    <div className = "footer__item">
                        <p className = "footer__text">Условия сервиса</p>
                        <div className="languages">
                            <img className= "language" src={languageImage} alt="#languageImage" />
                            <p className= "language">Каз</p>
                            <p className= "language language--active">Рус</p>
                            <p className= "language">Eng</p>
                        </div>
                    </div>
                    <div className="footer__item ">
                        <div className="footer__socials">
                            <a className="social" href="">
                                <img src={vkImage} alt="#VK" />
                            </a>
                            <a className="social" href="">
                                <img src={tgImage} alt="#TG" />
                            </a>
                            <a className="social" href="">
                                <img src={whatsappImage} alt="#WhatsApp" />
                            </a>
                        </div>
                    </div>
                 </footer>
            </div>

    )
};

export default CartFooterContent;