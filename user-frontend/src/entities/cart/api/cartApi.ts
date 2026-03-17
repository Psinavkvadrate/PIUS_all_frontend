import { baseApi } from "../../../shared/api/baseApi";
import type { CartResponse } from "../model/types";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<CartResponse, void>({
      query: () => "/cart/",
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation<
      any,
      { productId: string; quantity?: number }
    >({
      query: ({ productId, quantity = 1 }) => ({
        url: "/cart/add",
        method: "POST",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart", "User"],
    }),

    updateCartItem: builder.mutation<
      any,
      { productId: string; quantity: number }
    >({
      query: ({ productId, quantity }) => ({
        url: "/cart/item/update",
        method: "PATCH",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart", "User"],
    }),

    removeCartItem: builder.mutation<any, string>({
      query: (productId) => ({
        url: `/cart/item/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart", "User"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
} = cartApi;