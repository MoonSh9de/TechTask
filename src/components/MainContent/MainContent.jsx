import React from "react";
import './MainContent.css'
import '../../styles/fonts.css'
import Container from "../Container/Container";
import ProductList from "../ProductList/ProductList.jsx";


import headphonesWired from "../../scripts/headphones_wired.js"
import headphonesWireless from "../../scripts/headphones_wireless.js";

import star from "../../images/main/star.svg";

const MainContent = () => {
    return (
        <Container>
            <main>
                <h2 className="headphones__title">Наушники</h2>
                <ProductList headphones={headphonesWired}/>

                <h2 className="headphones__title">Беспроводные наушники</h2>
                <ProductList headphones={headphonesWireless}/>
            </main>

        </Container>
    )
};

export default MainContent;