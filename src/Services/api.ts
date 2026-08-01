import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Restaurante from "../models/restaurante";

type CheckoutPayload = {
  products: {
    id: number;
    price: number;
  }[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};
type CheckoutResponse = {
  orderId: string;
};
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
    checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useCheckoutMutation } = api;

export default api;
