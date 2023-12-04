// We do NOT need to re-create these hooks for each of the store slices.

// Extra type safety when working with "thunks" - action creators which
// perform some (async) actions before the actual action is created and dispatched.

import {useDispatch, useSelector, type TypedUseSelectorHook} from 'react-redux';
import {type AppDispatch, type RootState} from './store';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
