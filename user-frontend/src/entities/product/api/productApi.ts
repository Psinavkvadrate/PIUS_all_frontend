import { baseApi } from "../../../shared/api/baseApi";
import type { Product, ProductFilters } from "../model/types";

export const productApi = {
  async getProducts(filters: ProductFilters) {
    const res = await baseApi.get("/products", {
      params: filters,
    });

    return res.data;
  },

  async getProduct(id: string) {
    const res = await baseApi.get<Product>(`/products/${id}`);
    return res.data;
  },
};
