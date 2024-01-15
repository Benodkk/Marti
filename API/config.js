const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export const api = new WooCommerceRestApi({
  url: "https://admin.martibikini.com/",
  consumerKey: "ck_211e22b49a4bf4dc2df6f09ad84b6ca3d5382df4",
  consumerSecret: "cs_17ea066ea4211692d0af2380c58da6ad350451e6",
  version: "wc/v3",
});
