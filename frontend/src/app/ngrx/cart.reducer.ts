import { createReducer, on } from '@ngrx/store';
import { addCartItem, reduceCartItem, removeCartItem } from './cart.actions';
import { Product } from '../model/product.model';

export interface CartState {
    [key: number]: Product
}

export const CART_KEY = 'cart';

const getCartItems = (): CartState => {
    try {
        const cartStr = sessionStorage.getItem(CART_KEY);
        if (cartStr) {
            return JSON.parse(cartStr);
        }
    } catch (error: any) {
        console.log(error);
    }
    return {};
}

const setCartItems = (state: CartState): void => {
    sessionStorage.setItem(CART_KEY, JSON.stringify(state));
}

const addItemToCart = (state: CartState, product: Product): CartState => {
    const newState = { ...state };
    const newProduct = { ...product };
    const item = { ...state[product.id] };
    if (item && item.quantity) {
        item.quantity += 1;
        newState[product.id] = item;
    } else {
        newProduct.quantity = 1;
        newState[product.id] = newProduct;
    }
    setCartItems(newState);
    return newState;
}

const reduceItemFromCart = (state: CartState, product: Product): CartState => {
    const newState = { ...state };
    const item = { ...state[product.id] };
    if (item && item.quantity) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            newState[product.id] = item;
        } else {
            delete newState[product.id];
        }
        setCartItems(newState);
        return newState;
    }
    return newState;
}

const removeItemFromCart = (state: CartState, product: Product): CartState => {
    const newState = { ...state };
    delete newState[product.id];
    setCartItems(newState);
    return newState;
}

export const initialCartState: CartState = getCartItems();

export const cartReducer = createReducer(
    initialCartState,
    on(addCartItem, addItemToCart),
    on(reduceCartItem, reduceItemFromCart),
    on(removeCartItem, removeItemFromCart)
);