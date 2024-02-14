import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definicja typu dla stanu uwierzytelniania
interface AuthState {
  token: string | null;
  userData: {
    email: string;
    username: string;
    // Możesz dodać więcej pól zależnie od tego, co zwraca Twój backend
  } | null;
}

// Stan początkowy
const initialState: AuthState = {
  token: null,
  userData: null,
};

// Tworzenie slice'a
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Akcja do zapisywania danych uwierzytelniania
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
    },
    // Akcja do wylogowania użytkownika
    logout: (state) => {
      state.token = null;
      state.userData = null;
    },
  },
});

// Eksport selektorów
export const selectAuthToken = (state: any) => state.auth.token;
export const selectUserData = (state: any) => state.auth.userData;

// Eksport akcji
export const { setAuthData, logout } = authSlice.actions;

// Eksport reducera
export default authSlice.reducer;
