// languageSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface LanguageState {
  language: "pl" | "en";
}

const initialState: LanguageState = {
  language: "pl",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"pl" | "en">) => {
      state.language = action.payload;
    },
    resetLanguage: (state) => {
      state.language = initialState.language; // Reset do domyślnego języka
    },
  },
});

export const selectLanguage = (state: RootState) => state.language.language;

export const { setLanguage, resetLanguage } = languageSlice.actions;

export default languageSlice.reducer;
