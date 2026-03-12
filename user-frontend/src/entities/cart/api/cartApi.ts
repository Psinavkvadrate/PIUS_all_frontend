import { baseApi } from "../../../shared/api/baseApi";
import type { CartResponse } from "../model/types";

export const cartApi = {
  async getCart() {
    const res = await baseApi.get<CartResponse>("/cart/");
    return res.data;
  },

  async add(productId: string, quantity = 1) {
    const res = await baseApi.post("/cart/add", {
      productId,
      quantity,
    });

    return res.data;
  },

  async update(productId: string, quantity: number) {
    const res = await baseApi.patch("/cart/item/update", {
      productId,
      quantity,
    });

    return res.data;
  },

  async remove(productId: string) {
    const res = await baseApi.delete(`/cart/item/${productId}`);
    return res.data;
  },
};
