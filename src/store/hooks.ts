// Extra type safety when working with "thunks" - action creators which
// perform some (async) actions before the actual action is created and dispatched.

import {useDispatch} from 'react-redux';
import {type AppDispatch} from './store';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
