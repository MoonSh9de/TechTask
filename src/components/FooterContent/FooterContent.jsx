import React from "react";
import {Link} from 'react-router-dom';

import './FooterContent.css';
import Container from "../Container/Container";

import languageImage from "../../images/footer/language.svg";
import vkImage from "../../images/footer/vk.svg";
import tgImage from "../../images/footer/telegram.svg";
import whatsappImage from "../../images/footer/whatsapp.svg";


const FooterContent = () => {
    return (
            <div className="container--footer">
                <footer className="footer">
                    <div className="footer__item">
                    <Link to="/general" className="logo"  id="logo">
                        <h2>Qpick</h2>
                    </Link>

                    </div>

                    <div className="footer__item">
                        <a href="#" className="footer__link">Избранное</a>
                        <Link to="/cart" className="footer__link">Корзина</Link>
                        <a href="#" className="footer__link">Контакты</a>
                    </div>
                    <div className = "footer__item">
                    <a href="#" className="footer__link footer__link--conditions">Условия сервиса</a>
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

export default FooterContent;