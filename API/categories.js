import { api } from "./config";

export const getCategories = () => {
  api
    .get("products/categories")
    .then((response) => {
      console.log(response.data);
      let allCategories = response.data.filter(
        (product) => product.slug !== "bez-kategorii"
      );
      console.log(allCategories);
    })
    .catch((error) => {
      console.log(error);
    });
};
