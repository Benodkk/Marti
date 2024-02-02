import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  secondName: string;
  street: string;
  additionalInfo: string;
  postCode: string;
  city: string;
  phone: string;
  country: string;
}

const initialState: FormState = {
  name: "",
  secondName: "",
  street: "",
  additionalInfo: "",
  postCode: "",
  city: "",
  phone: "",
  country: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectEntireForm = (state: any) => state.form;

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
