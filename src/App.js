import React from 'react';

import './styles/App.css'
import { BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';

import General from './pages/General';
import Cart from './pages/Cart';
import HeaderContent from './components/HeaderContent/HeaderContent'
import FooterContent from './components/FooterContent/FooterContent'

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
