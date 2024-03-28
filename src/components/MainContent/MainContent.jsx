import React from "react";
import './MainContent.css'
import '../../styles/fonts.css'
import Container from "../Container/Container";
import CardList from "../ProductList/ProductList.jsx";


import headphonesWired from "../../headphones_wired.js"
import headphonesWireless from "../../headphones_wireless.js";

import star from "../../images/main/star.svg";

const MainContent = () => {
    return (
        <Container>
            <main>
                <h2 className="headphones__title">Наушники</h2>
                <CardList headphones={headphonesWired}/>

                <h2 className="headphones__title">Беспроводные наушники</h2>
                <CardList headphones={headphonesWireless}/>
            </main>

        </Container>
    )
};

export default MainContent;