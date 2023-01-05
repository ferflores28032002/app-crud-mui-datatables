import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientes: [],
  isLoading: false,
};

export const clientesSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    getClientes: (state, { payload }) => {
      state.isLoading = true;
      state.clientes = payload;
      state.isLoading = false;
    },
    isLoadingTrue: (state) => {
      state.isLoading = true;
    },
    isLoadingFalse: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getClientes, isLoadingFalse, isLoadingTrue } =
  clientesSlice.actions;
