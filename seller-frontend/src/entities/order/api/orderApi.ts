import { baseApi } from "../../../shared/api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: (params) => ({
        url: "/seller/orders",
        params,
      }),
      providesTags: ["Orders"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/seller/orders/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Orders"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/seller/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi;