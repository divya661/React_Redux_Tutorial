import { ProductActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  totalQuantity: 0,
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state };
    default:
      return state;
  }
};
