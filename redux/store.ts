import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import formReducer from "./formSlice";
import authReducer from "./authSlice";
import languageReducer from "./languageSlice";
import currencyReducer from "./currencySlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
    auth: authReducer,
    language: languageReducer,
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
