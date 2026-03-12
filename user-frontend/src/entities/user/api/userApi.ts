import { baseApi } from "../../../shared/api/baseApi";

export const getMe = async () => {
  const response = await baseApi.get("/auth/me", {
    withCredentials: true,
  });

  return response.data;
};
