import { ADD_ITEM, SUBTRACT_ITEM } from "../actionTypes/actionTypes";

export const addItemsToCart = (itemsCount = 1) => ({
  type: ADD_ITEM,
  payload: itemsCount,
});

export const removeItemsFromCart = (itemsCount = 1) => ({
  type: SUBTRACT_ITEM,
  payload: itemsCount,
});
