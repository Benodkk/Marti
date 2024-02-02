import { api } from "./config";

// export const getCategories = async () => {
//   try {
//     const response = await api.get("products/categories?per_page=100");
//     let allCategories = response.data.filter(
//       (product) => product.slug !== "bez-kategorii"
//     );
//     return allCategories;
//   } catch (error) {
//     console.log(error);
//     throw error; // Rzuca błąd dalej
//   }
// };

const WooCommerceAPI = {
  url: "https://admin.martibikini.com/",
  consumerKey: "ck_211e22b49a4bf4dc2df6f09ad84b6ca3d5382df4",
  consumerSecret: "cs_17ea066ea4211692d0af2380c58da6ad350451e6",
  version: "wc/v3",
};
export const getCategories = async () => {
  const auth =
    "Basic " +
    btoa(WooCommerceAPI.consumerKey + ":" + WooCommerceAPI.consumerSecret);
  const url =
    WooCommerceAPI.url + "wp-json/wc/v3/products/categories?per_page=100";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.filter((product) => product.slug !== "bez-kategorii");
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
