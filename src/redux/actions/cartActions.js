import { axiosFirebaseInstance } from "../../api/axiosInstance";
import { CartActionTypes } from "../constants/action-types";

export const addToCartProduct = (product) => async (dispatch, getState) => {
  try {
    let itemsList = getState().cart.itemsList;

    // Check if the product already exists in the cart by id
    const existingProductIndex = !itemsList.length
      ? -1
      : itemsList.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update the quantity or handle it as needed
      itemsList[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the list
      itemsList.push({ ...product, quantity: 1 });
    }

    await axiosFirebaseInstance.put(`/cartItems.json`, itemsList);

    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: itemsList,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCartProductId = (productId) => async (dispatch, getState) => {
  let itemsList = getState().cart.itemsList;
   const existingProductIndex = itemsList.findIndex(
     (item) => item.id === productId
   );

  if (itemsList[existingProductIndex].quantity === 1) {
    itemsList = itemsList.filter((item) => item.id !== productId);
  } else {
    itemsList[existingProductIndex].quantity--;
  }

  await axiosFirebaseInstance.put(`/cartItems.json`, itemsList);

  dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: itemsList,
  });
};

export const fetchCartItems = () => async (dispatch) => {
  const response = await axiosFirebaseInstance.get("/cartItems.json");
  const currentItemsList = response.data || [];
  let totalPrice = 0;
  let totalQuantity = 0;
  currentItemsList.forEach((item) => {
    totalPrice += item.price;
    totalQuantity += item.quantity;
  });

  dispatch({
    type: CartActionTypes.GET_CART_ITEMS,
    payload: { itemsList: currentItemsList, totalPrice, totalQuantity },
  });
};
