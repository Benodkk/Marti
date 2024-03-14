import axios from "axios";

// const localHostApi =
//   "ae78add67c38dcb471c86226700386fc06175826d31b10f3b58e8000b9f88bcad4e6482da506bb9b6cb9b6c5f4f3e05f21a8a45ccfa36a1348c7f27435e0126b7cdcb0aa9d8949997cc3de1c37a7ec7b941cace5d3005e4bee913cd489402393eeeeae6f4555d95834c49430e612e71c7412efd33f8bdb7153754bd3dba55194";
const prodApi = process.env.NEXT_PUBLIC_STRAPICODE;

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
  try {
    const data = await axios.post(`${prodUrl}${endpoint}`, payload, {
      headers: {
        Authorization: apiAuthCode,
      },
    });
    return data.data;
  } catch (error) {
    return error;
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

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Rzucenie błędu pozwoli wywołującemu zareagować odpowiednio
  }
};

const createSizeFilterQueryString = (sizes) => {
  return sizes
    .map((size) => `&filters[heels_sizes][value][$in]=${size}`)
    .join("");
};

const createColorsFilterQueryString = (colors) => {
  return colors.map((size) => `&filters[colors][name][$in]=${size}`).join("");
};

export const fetchAllProdWithPriceAndSize = async (
  id,
  minPrice,
  maxPrice,
  sizes,
  colors,
  currency
) => {
  try {
    // Dodawanie parametrów filtrowania ceny do URL
    const priceFilter = `${
      minPrice ? `&filters[${currency}][$gte]=${minPrice}` : ""
    }${maxPrice ? `&filters[${currency}][$lte]=${maxPrice}` : ""}`;

    // Dodawanie parametrów filtrowania rozmiaru do URL, zakładając, że sizes to tablica rozmiarów
    const sizeFilter =
      sizes.length > 0 ? createSizeFilterQueryString(sizes) : "";

    const colorsfilter =
      colors.length > 0 ? createColorsFilterQueryString(colors) : "";

    const url = `products?filters[categories][id][$in]=${id}&populate=*${priceFilter}${sizeFilter}${colorsfilter}`;

    const response = await getData(url);
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error; // Rzucenie błędu pozwoli wywołującemu zareagować odpowiednio
  }
};

export const fetchColors = async (id) => {
  try {
    const response = await getData(`colors?populate=*`);
    const data = response.data;
    return data;
  } catch {}
};

export const fetchSizes = async (id) => {
  try {
    const response = await getData(`sizes?populate=*`);
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
      `products/${id}?populate[attributes][populate][options][populate]=*&populate[categories]=*&populate[form]=*&populate[main_photo]=*&populate[photos]=*&populate[heels_sizes]=*&populate[color]=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

// Auth

export const signUp = async (email, password, newsletter_en, newsletter_pl) => {
  try {
    const response = await postData("auth/local/register", {
      username: email,
      email,
      password,
      newsletter_en,
      newsletter_pl,
    });
    return response;
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
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getVerify = async (endpoint) => {
  try {
    const data = await axios.get(`${prodUrl}${endpoint}`, {
      headers: {
        Authorization: apiAuthCode,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const confirmEmail = async (code) => {
  try {
    const response = await getVerify(
      `auth/email-confirmation?confirmation=${code}`
    );
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

export const fetchMainPageNews = async () => {
  try {
    const response = await getData(
      `newss?sort=publishedAt:desc&pagination[limit]=3&populate=*`
    );
    const data = response.data;
    return data;
  } catch {}
};

export const fetchNews = async () => {
  try {
    const response = await getData(`newss?sort=publishedAt:desc&populate=*`);
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

// users actions

const putUserData = async (endpoint, code, putData) => {
  const apiAuthCodee = `Bearer ${code}`;
  try {
    const data = await axios.put(`${prodUrl}${endpoint}`, putData && putData, {
      headers: {
        Authorization: apiAuthCodee,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserData = async (endpoint, code) => {
  const apiAuthCodee = `Bearer ${code}`;

  try {
    const data = await axios.get(`${prodUrl}${endpoint}`, {
      headers: {
        Authorization: apiAuthCodee,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const postUserData = async (endpoint, postDataa, code) => {
  const apiAuthCodee = `Bearer ${code}`;
  try {
    const data = await axios.post(
      `${prodUrl}${endpoint}`,
      postDataa,
      code
        ? {
            headers: {
              Authorization: apiAuthCodee,
            },
          }
        : null
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeAdress = async (
  first_name,
  second_name,
  country,
  street,
  post_code,
  city,
  phone_number,
  userId,
  code,
  newsletter_en,
  newsletter_pl
) => {
  const formData = {
    first_name: first_name,
    second_name: second_name,
    country: country,
    street: street,
    post_code: post_code,
    city: city,
    phone_number,
    newsletter_en,
    newsletter_pl,
  };

  try {
    const response = await putUserData(`users/${userId}`, code, formData);
    return response;
  } catch {}
};

export const getUserInfo = async (id, code) => {
  try {
    const response = await getUserData(`users/${id}?populate=*`, code);

    return response;
  } catch {}
};

export const makeOrder = async (
  userId,
  productId,
  total_price,
  payment_type,
  status,
  code,
  adress,
  phone,
  email,
  client_name,
  details,
  language
) => {
  let responseStatus = false;
  const data = {
    data: {
      users_permissions_user: userId,
      ordered_products: productId,
      total_price: total_price,
      payment_type,
      status,
      adress: adress,
      phone: phone,
      email: email,
      client_name: client_name,
      details,
      language: language,
    },
  };
  try {
    const response = await postUserData(`orders`, data, code);
    if (response.status == 200) {
      responseStatus = true;
    }
  } catch {}
  return responseStatus;
};

export const resetPasswordSend = async (email) => {
  try {
    const response = await postData("auth/forgot-password", {
      email,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetPassword = async (code, password, passwordConfirmation) => {
  try {
    const response = await postData("auth/reset-password", {
      code,
      password,
      passwordConfirmation,
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// coupons

export const fetchCoupon = async (name) => {
  let responseData;
  try {
    const response = await getData(`coupons?filters[name][$eq]=${name}`);
    let data = response.data;
    if (data && data.length > 0) {
      responseData = data[0];
    } else {
      responseData = null;
    }
    return responseData;
  } catch {}
};

// search products

export const fetchSearchProducts = async (name) => {
  let responseData;
  try {
    const response = await getData(
      `products?filters[name][$containsi]=${name}&pagination[limit]=3&populate[main_photo]=*&populate[categories]=*`
    );
    let data = response.data;
    if (data && data.length > 0) {
      responseData = data;
    } else {
      responseData = null;
    }
    return responseData;
  } catch {}
};
