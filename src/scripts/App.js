import React from 'react';

import { BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';

import General from '../pages/General';
import Cart from '../pages/Cart';

import '../styles/main.css'
import '../styles/adaptiv.css'

function App() {
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
