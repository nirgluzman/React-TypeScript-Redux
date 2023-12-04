import {configureStore} from '@reduxjs/toolkit';

import {cartSlice} from './cart-slice.ts';

// create a Redux store.
export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
