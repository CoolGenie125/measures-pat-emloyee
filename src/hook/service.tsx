/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "config/constant";

export const serviceAPI = async (cat1: number, cat2: number, cat3: number) => {
  try {
    console.log("input value: ", cat1, cat2, cat3);
    const response = await axios.get(
      `${REQUEST_API_URL}/services/${cat1}/${cat2}/${cat3}`
    );
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const serviceOneAPI = async (id: any) => {
  try {
    console.log("input value: ", id);
    const response = await axios.get(`${REQUEST_API_URL}/services/${id}`);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};
