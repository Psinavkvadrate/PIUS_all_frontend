import { baseApi } from "../../../shared/api/baseApi";
import type { OrderHistoryResponse, OrderDetails } from "../model/types";

export const orderApi = {
  async getOrders(page = 1) {
    const res = await baseApi.get<OrderHistoryResponse>("/orders/my", {
      params: { page },
    });

    return res.data;
  },

  async getOrderDetails(id: string) {
    const res = await baseApi.get<OrderDetails>(`/orders/${id}`);
    return res.data;
  },

  async createOrder(data: {
    deliveryAddress: string;
    deliveryCity: string;
    phone: string;
    deliveryComment?: string;
  }) {
    const res = await baseApi.post("/orders", data);
    return res.data;
  },
};
