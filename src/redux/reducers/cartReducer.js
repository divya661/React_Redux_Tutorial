import { CartActionTypes } from "../constants/action-types";

const intialState = {
  itemsList: [],
  totalQuantity: 0,
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        itemsList: [...payload], // Use spread operator to create a new array
        totalQuantity: state.totalQuantity + 1,
      };
    case CartActionTypes.GET_CART_ITEMS:
      return {...state,...payload} ;
    case CartActionTypes.REMOVE_FROM_CART:
      return { ...state, itemsList:[...payload],totalQuantity:state.totalQuantity-1 };
    default:
      return state;
  }
};
