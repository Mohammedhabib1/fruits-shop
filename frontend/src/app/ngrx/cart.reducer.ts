import { createReducer, on } from '@ngrx/store';
import { addCartItem, reduceCartItem, removeCartItem, setCartItems } from './cart.actions';
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

const setCartState = (state: CartState): void => {
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
    setCartState(newState);
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
        setCartState(newState);
        return newState;
    }
    return newState;
}

const removeItemFromCart = (state: CartState, product: Product): CartState => {
    const newState = { ...state };
    delete newState[product.id];
    setCartState(newState);
    return newState;
}

const setItemsToCart = (state: CartState, items: {cart: Product[]}): CartState => {
    let newState: any = {};
    if (items.cart.length) {
        for (let i = 0; i < items.cart.length; i++) {
            const item = items.cart[i];
            if (item && item.quantity) {
                newState[item.id] = item;
            }
        }
    }
    setCartState(newState);
    return newState;
}

export const initialCartState: CartState = getCartItems();

export const cartReducer = createReducer(
    initialCartState,
    on(addCartItem, addItemToCart),
    on(reduceCartItem, reduceItemFromCart),
    on(removeCartItem, removeItemFromCart),
    on(setCartItems, setItemsToCart)
);