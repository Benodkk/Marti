import axios from "axios";

const localHostApi =
  "ae78add67c38dcb471c86226700386fc06175826d31b10f3b58e8000b9f88bcad4e6482da506bb9b6cb9b6c5f4f3e05f21a8a45ccfa36a1348c7f27435e0126b7cdcb0aa9d8949997cc3de1c37a7ec7b941cace5d3005e4bee913cd489402393eeeeae6f4555d95834c49430e612e71c7412efd33f8bdb7153754bd3dba55194";
const prodApi =
  "c5c28d42d93aa104e97c649b6dc9668db6455611ac22fa636acb2e56ca8f45168265b3058b82bb74bab4708c2359f090350cd60cb72f778afe21c50549e1333c98d623b2495931b992b71e6e718841889e9357250f537d85135d9eea78fcc69c898e74972ddeea5db597be768ecb0ba4c01bd280ad1fc2ae9aa3449ed4b7ff8f";

export const localHostUrl = "http://localhost:1337/";
export const prodUrl = "https://marti-be-88d4b42da163.herokuapp.com/api/";

export const useUrl = prodUrl;

const apiAuthCode = `Bearer ${prodApi}`;

const getData = async (endpoint) => {
  try {
    const data = await axios.get(`${prodUrl}${endpoint}`, {
      headers: {
        Authorization: apiAuthCode,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (endpoint, payload) => {
  console.log(payload);
  try {
    const data = await axios.post(`${prodUrl}${endpoint}`, payload, {
      headers: {
        Authorization: apiAuthCode,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// dobre
export const fetchAllCategories = async () => {
  try {
    const response = await getData("categories?populate=*");
    const data = response.data;
    return data;
  } catch {}
};

export const fetchAllCategoriesWithProductDetails = async () => {
  try {
    const response = await getData(
      "categories?populate[products][populate][main_photo]=*&populate[products][populate][categories]=*"
    );
    const data = response.data;
    return data;
  } catch {}
};

// dobre
export const fetchAllCat = async (id) => {
  try {
    const response = await getData(
      `categories?filters[id][$in]=${id}&populate[products][populate][main_photo]=*&populate[products][populate][categories]=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

export const fetchAllProdWithPriceRange = async (id, minPrice, maxPrice) => {
  try {
    // Dodawanie parametrów filtrowania ceny do URL
    const priceFilter = `  ${
      minPrice ? `&filters[price_pln][$gte]=${minPrice}` : ""
    }${maxPrice ? `&filters[price_pln][$lte]=${maxPrice} ` : ""}`;
    const url = `products?filters[categories][id][$in]=${id}&populate=*${priceFilter}`;
    console.log(url);
    const response = await getData(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Rzucenie błędu pozwoli wywołującemu zareagować odpowiednio
  }
};

// dobre
export const fetchProductsByCategoryId = async (id) => {
  try {
    const response = await getData(
      `products?filters[categories][id][$in]=${id}&populate=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

// dobre
export const fetchProductsByCategoryName = async (id) => {
  try {
    const response = await getData(
      `products?filters[categories][name][$in]=${id}&populate=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

// dobre
export const fetchBikiniDetailsByName = async (name) => {
  try {
    const response = await getData(
      `bikini-details?filters[name][$eq]=${name}&populate[bikini_details][populate][options][populate][image]=*&populate[bikini_details][populate][noImg]=*&populate[bikini_details][populate][yesImg]=*&populate[bikini_details][populate][options][populate][smallImage]=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

// dobre
export const fetchRobe = async () => {
  try {
    const response = await getData(`robe-details?populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

// dobre
export const fetchProductById = async (id) => {
  try {
    const response = await getData(
      `products/${id}?populate[attributes][populate][options][populate]=*&populate[categories]=*&populate[form]=*&populate[main_photo]=*&populate[photos]=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

// Auth

export const signUp = async (email, password) => {
  try {
    const response = await postData("auth/local/register", {
      username: email,
      email,
      password,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await postData("auth/local", {
      identifier: email,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Main page

export const fetchWelcomePageContent = async () => {
  try {
    const response = await getData(`welcome-page?populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

export const fetchBestsellerTitle = async () => {
  try {
    const response = await getData(`bestseller-title`);
    const data = response.data;
    return data;
  } catch {}
};

export const fetchNews = async (id) => {
  try {
    const response = await getData(`newss??_sort=published_at:desc&populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

// news

export const fetchOneNews = async (id) => {
  try {
    const response = await getData(`newss/${id}?populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

// info

export const fetchFooterLinks = async () => {
  try {
    const response = await getData(`footer-links`);
    const data = response.data;
    return data;
  } catch {}
};

export const fetchInfo = async (id) => {
  try {
    const response = await getData(`footer-links/${id}?populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

// footer

export const fetchFooterText = async () => {
  try {
    const response = await getData(`footer-text`);
    const data = response.data;
    return data;
  } catch {}
};

export const fetchContacts = async () => {
  try {
    const response = await getData(`contacts`);
    const data = response.data;
    return data;
  } catch {}
};
