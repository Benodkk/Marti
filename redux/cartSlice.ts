// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const isBrowser = typeof window !== "undefined";

const initialState = {
  items: isBrowser ? JSON.parse(localStorage.getItem("cartItems") || "[]") : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      let newItem = { ...action.payload };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<{ id: any }>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = []; // Resetowanie tablicy items do pustej tablicy
    },
    editItem: (state, action: PayloadAction<{ id: any; count: any }>) => {
      const index = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          count: action.payload.count,
        };
      }
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalItems = createSelector([selectCartItems], (items) =>
  items.reduce((total: any, item: any) => total + 1, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total: any, item: any) => total + 1 * item.price, 0)
);

export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;

export default cartSlice.reducer;
