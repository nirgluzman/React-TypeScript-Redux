// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.

import {createSlice} from '@reduxjs/toolkit';

type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart() {},
		removeFromCart() {},
	},
});
