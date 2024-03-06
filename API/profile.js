import { api } from "./config";

export const createProfile = async (email, first_name, last_name, password) => {
  const data = {
    email: email,
    first_name: first_name,
    last_name: last_name,
    username: email,
    password: password,
  };
  try {
    const response = await api.post("customers", data);
  } catch (error) {
    console.log(error);
  }
};
