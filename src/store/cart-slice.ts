// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.

import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type CartItem = {
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
		// adding items to the shopping cart.
		addToCart(
			state,
			action: PayloadAction<{id: string; title: string; price: number}> // PayloadAction has the type defintion of type of data we expect to be attached to this action.
		) {
			// checking if a similar item is already in the cart.
			// findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
			// if no elements satisfy the testing function, -1 is returned.
			const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

			if (itemIndex >= 0) {
				// similar item is already in the cart, so we just need to update the quantity.
				state.items[itemIndex].quantity++;
			} else {
				// similar item is not on the cart, so we need to add this item with quantity=1.
				state.items.push({...action.payload, quantity: 1});
			}
		},

		// removing items from the shopping cart.
		removeFromCart(
			state,
			action: PayloadAction<string> // for removing item we just need the 'id' (which is of type 'string').
		) {
			// find the item by index.
			// findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
			// if no elements satisfy the testing function, -1 is returned.
			const itemIndex = state.items.findIndex((item) => item.id === action.payload);

			if (state.items[itemIndex].quantity === 1) {
				// if item's quantity=1, then we need to remove the item from cart.
				state.items.splice(itemIndex, 1);
			} else {
				// if item's quantity>1, then we need to reduce the quantity by 1.
				state.items[itemIndex].quantity--;
			}
		},
	},
});

export const {addToCart, removeFromCart} = cartSlice.actions;
