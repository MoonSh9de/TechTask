import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './CategoriesSlice';
import productsSlice from './ProductsSlice';
import cartSlice from './CartSlice';

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;