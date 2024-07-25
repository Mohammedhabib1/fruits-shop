import { State, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

export const FeatureKey = 'CART_STATE'
export const selectCartState = createFeatureSelector<CartState>(FeatureKey);
export const getCartSelector = createSelector(selectCartState, (state) => state);