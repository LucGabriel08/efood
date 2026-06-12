import { createSlice } from "@reduxjs/toolkit";
import Prato from "../../../models/Pratos";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Prato[],
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { open, close, add, remove } = cartSlice.actions;
export default cartSlice.reducer;
