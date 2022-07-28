import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Individual {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

interface Corporate {
  companyName: string;
  typeOfBusiness: string;
  dateOfIncorporation: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface InitialState {
  FormIndividualSignup: Individual;
  FormIndividualStep: number;
  FormCorporateSignup: Corporate;
  FormCorporateStep: number;
}

const initialState: InitialState = {
  FormIndividualStep: 1, // Default Page Set to 1
  FormIndividualSignup: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  },
  FormCorporateStep: 1, // Default Page Set to 1
  FormCorporateSignup: {
    companyName: "",
    typeOfBusiness: "",
    dateOfIncorporation: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};
export const rootSlice = createSlice({
  name: "root",

  initialState,

  reducers: {
    resetStep: () => {
      return initialState;
    },
    individualNextStep: (state) => {
      if (state.FormIndividualStep >= 4) {
        return state;
      }
      state.FormIndividualStep += 1;
    },
    individualPreviousStep: (state) => {
      if (state.FormIndividualStep <= 1) {
        return state;
      }
      state.FormIndividualStep -= 1;
    },
    formIndividualSignup: (state, action: PayloadAction<Individual>) => {
      state.FormIndividualSignup = { ...action.payload };
    },
    corporateNextStep: (state) => {
      if (state.FormCorporateStep >= 4) {
        return state;
      }
      state.FormCorporateStep += 1;
    },
    corporatePreviousStep: (state) => {
      if (state.FormCorporateStep <= 1) {
        return state;
      }
      state.FormCorporateStep -= 1;
    },
    formCorporateSignup: (state, action: PayloadAction<Corporate>) => {
      state.FormCorporateSignup = { ...action.payload };
    },
  },
});

// Store Actions
export const {
  formCorporateSignup,
  formIndividualSignup,
  individualNextStep,
  individualPreviousStep,
  corporateNextStep,
  corporatePreviousStep,
  resetStep,
} = rootSlice.actions;

export const reducer = rootSlice.reducer;

