import React from "react";
import HeadphonesCard from "../HeadphonesProduct/HeadphonesProduct.jsx";

import "./ProductList.css"
import star from "../../images/main/star.svg";

const ProductList = (props) => {
    const headphones = Array.isArray(props.headphones) ? props.headphones : [];
    return (
        <section className="headphones headphones--wired">
            {headphones.map(product =>(
                <HeadphonesCard key={product.id} product={product} />
            ))}

        </section>
    )
};

export default ProductList;