// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"; // Zaimportuj typ RootState reprezentujący cały stan aplikacji

// Definicja typu dla stanu użytkownika
interface UserState {
  email: string;
  id: number | null;
  confirmed: boolean;
}

// Stan początkowy z typami
const initialState: UserState = {
  email: "",
  id: null,
  confirmed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Zdefiniowanie akcji z typem Payload
    setUser: (state, action: PayloadAction<UserState>) => {
      const { email, id, confirmed } = action.payload;
      state.email = email;
      state.id = id;
      state.confirmed = confirmed;
    },
    resetUser: () => initialState,
  },
});

export const selectUserData = (state: RootState): UserState => state.user;

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
