import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    credentials: "include",

    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTkxMTMyMC0wYzQ0LTQ0MjEtYWY5MS0wYTRkOTJiZGQ0NzMiLCJpc1NlbGxlciI6dHJ1ZX0.azhgjOSX9zVMseSagbKti7Ci2BvWW2xK_0FWa_iUt3g";

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),

  tagTypes: ["User", "Cart", "Order", "Products"],

  endpoints: () => ({}),
});
