// currencySlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CurrencyState {
  currency: "pln" | "eur" | "usd";
  symbol: "zł" | "€" | "$";
}

const initialState: CurrencyState = {
  currency: "pln",
  symbol: "zł", // Domyślny symbol dla PLN
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<"pln" | "eur" | "usd">) => {
      state.currency = action.payload;
      // Ustawianie symbolu w zależności od wybranej waluty
      switch (action.payload) {
        case "pln":
          state.symbol = "zł";
          break;
        case "eur":
          state.symbol = "€";
          break;
        case "usd":
          state.symbol = "$";
          break;
        default:
          state.symbol = "zł"; // Domyślny symbol, na wypadek nieznanego kodu waluty
      }
    },
    resetCurrency: (state) => {
      state.currency = initialState.currency; // Reset do domyślnej waluty
      state.symbol = initialState.symbol; // Reset do domyślnego symbolu
    },
  },
});

export const selectCurrencyDetails = (state: RootState) => ({
  currency: state.currency.currency,
  symbol: state.currency.symbol,
});

export const { setCurrency, resetCurrency } = currencySlice.actions;

export default currencySlice.reducer;
