import { ProductActionTypes } from "../constants/action-types";
import axiosInstance from "../../api/axiosInstance";

export const fetchProducts = () => async (dispatch) => {
  const response = await axiosInstance.get("/products");
  dispatch({
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload: response.data,
    
  });
};

export const fetchProductDetail = (id) => async (dispatch) => {
  const response = await axiosInstance.get(`/products/${id}`);
  dispatch({
    type: ProductActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ProductActionTypes.SET_PRODUCTS,
    payload: products,
  };
};