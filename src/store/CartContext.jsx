import { createContext, useReducer } from "react";
import { actionNames } from "./actionNames";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

const cartReducer = (state, action) => {
  if (action.type === actionNames.ADD_ITEM) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === actionNames.REMOVE_ITEM) {
  }

  return state;
};

export const cartContextProvider = ({ children }) => {
  useReducer();

  return <CartContext>{children}</CartContext>;
};

export default CartContext;
