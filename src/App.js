import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './styles/App.css'
import { BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';

import General from './pages/General';
import Cart from './pages/Cart';

import headphonesWireless from "./headphones_wireless";
import headphonesWired from "./headphones_wired";
import { addProductToCategory } from "./features/CategoriesSlice";
import { addProduct } from "./features/ProductsSlice";


function App() {
	// имитация запроса на сервер
	const dispatch = useDispatch();
    headphonesWired.forEach((product) => {
        dispatch(addProduct(product));
        dispatch(
            addProductToCategory({ title: "Наушники", productId: product.id })
        );
    });
    headphonesWireless.forEach((product) => {
        dispatch(addProduct(product));
        dispatch(
            addProductToCategory({
                title: "Беспроводные наушники",
                productId: product.id,
            })
        );
    });

	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
				<Route path="/" element={<Navigate to="/general" />} />
					<Route path="/general" element={<General/>}/>
					<Route path="/cart" element={<Cart/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
