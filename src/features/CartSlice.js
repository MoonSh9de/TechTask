import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalCost: 0,
    itemsAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Добавление продукта в корзину
        addItemToCart(state, action) {
            const { id } = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === id
            );
            if (existingItemIndex !== -1) {

                state.items[existingItemIndex].amount += 1;
            } else {

                state.items.push({ id, amount: 1 });
            }
            state.itemsAmount += 1;
        },

        removeItemFromCart(state, {payload}) {
            const itemIndex = state.items.findIndex((item) => item.id === payload);
            state.itemsAmount -= state.items[itemIndex].amount;
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        increaseItem(state, { payload }) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].amount += 1;
            }
            state.itemsAmount += 1;
        },
        decreaseItem(state, { payload }) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].amount -= 1;
            }
            state.itemsAmount -= 1;
        },
        updateTotal(state, {payload}) {
            state.totalCost = payload
        },
    },
});

export default cartSlice.reducer;
export const {
    addItemToCart,
    removeItemFromCart,
    increaseItem,
    decreaseItem,
    updateTotal,
} = cartSlice.actions;
