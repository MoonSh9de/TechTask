import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import General from './pages/General';

import { Provider } from 'react-redux';
import store from './features/store'; // Подключите ваш Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);

