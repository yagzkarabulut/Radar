import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions/flightActions";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [], // tüm uçuş verileri
  path: [], // bir uçusun izlediği yol
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    // map bileşenine kullanıcak rotayı belirler
    setPath: (state, action) => {
      state.path = action.payload;
    },
    // mevcut rotaı temizler
    clearPath: (state) => {
      state.path = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlight.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlight.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    });

    builder.addCase(getFlight.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
  },
});

export const { setPath, clearPath } = flightSlice.actions;
export default flightSlice.reducer;
