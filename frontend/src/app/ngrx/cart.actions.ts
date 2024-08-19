import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product.model';

export const addCartItem = createAction<string, Product>('[Cart Component] Add cart item', props<Product>());
export const reduceCartItem = createAction<string, Product>('[Cart Component] Reduce cart item', props<Product>());
export const removeCartItem = createAction<string, Product>('[Cart Component] Remove cart item', props<Product>());
export const setCartItems = createAction<string, { cart: Product[] }>('[Cart Component] Set cart item', props<{ cart: Product[] }>());