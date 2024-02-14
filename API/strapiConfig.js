import axios from "axios";

const apiAuthCode = `Bearer ${process.env.NEXT_PUBLIC_STRAPICODE}`;

const getData = async (endpoint) => {
  try {
    const data = await axios.get(
      `https://marti-be-88d4b42da163.herokuapp.com/api/${endpoint}`,
      {
        headers: {
          Authorization: apiAuthCode,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (endpoint, payload) => {
  console.log(payload);
  try {
    const data = await axios.post(
      `https://marti-be-88d4b42da163.herokuapp.com/api/${endpoint}`,
      payload,
      {
        headers: {
          Authorization: apiAuthCode,
        },
      }
    );
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
