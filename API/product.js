import { api } from "./config";

export const getProducts = () => {
  api
    .get("products")
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
};
export const getProductById = async (id) => {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (error) {
    throw error; // Rzuca błąd dalej
  }
};

export const getProductsByCategoriesId = async (id) => {
  try {
    const response = await api.get(`products?category=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getProductsByCategoryAndPrice = async (
  categoryId,
  minPrice,
  maxPrice
) => {
  try {
    let queryString = `products?category=${categoryId}`;

    if (minPrice) {
      queryString += `&min_price=${minPrice}`;
    }

    if (maxPrice) {
      queryString += `&max_price=${maxPrice}`;
    }
    const response = await api.get(queryString);
    return response.data;
  } catch (error) {
    throw error;
  }
};
