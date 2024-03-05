import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import formReducer from "./formSlice";
import userReducer from "./userSlice";
import languageReducer from "./languageSlice";
import currencyReducer from "./currencySlice";
import { cartMiddleware } from "./cartMiddleware";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    user: userReducer,
    language: languageReducer,
    currency: currencyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
