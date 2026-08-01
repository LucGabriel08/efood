import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Prato from "../../../models/Pratos";

type DeliveryData = {
  receiver: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  complement: string;
};

type CartState = {
  items: Prato[];
  isOpen: boolean;
  step: "cart" | "delivery" | "payment" | "confirmation";
  delivery: DeliveryData;
  orderId: string;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: "cart",
  delivery: {
    receiver: "",
    address: "",
    city: "",
    cep: "",
    number: "",
    complement: "",
  },
  orderId: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
      state.step = "cart";
    },

    close: (state) => {
      state.isOpen = false;
      state.step = "cart";
    },

    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload);
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    saveDelivery: (state, action: PayloadAction<DeliveryData>) => {
      state.delivery = action.payload;
    },

    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },

    clearCart: (state) => {
      state.items = [];
      state.delivery = {
        receiver: "",
        address: "",
        city: "",
        cep: "",
        number: "",
        complement: "",
      };
      state.orderId = "";
    },

    goToDelivery: (state) => {
      state.step = "delivery";
    },

    goToPayment: (state) => {
      state.step = "payment";
    },

    goToConfirmation: (state) => {
      state.step = "confirmation";
    },

    goToCart: (state) => {
      state.step = "cart";
    },
  },
});

export const {
  open,
  close,
  add,
  remove,
  saveDelivery,
  setOrderId,
  clearCart,
  goToDelivery,
  goToPayment,
  goToConfirmation,
  goToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
