// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: any = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      let newItem = { ...action.payload };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload.id
      );
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

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
