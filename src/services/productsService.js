import api from "./api";

export const getProducts = async (category, signal) => {
  const delay = category === "beauty" ? 3000 : 0;
  const endpoint = category
    ? `/products/category/${category}?limit=0&delay=${delay}`
    : "/products?limit=0";
  const response = await api.get(endpoint, { signal });
  return response.data.products;
};
