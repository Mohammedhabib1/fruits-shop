import { State, createFeatureSelector, createSelector } from "@ngrx/store";

export const FeatureKey = 'CART_STATE'
export const selectCartState = createFeatureSelector<State<any>>(FeatureKey);
export const getCartSelector = createSelector(selectCartState, (state) => state);