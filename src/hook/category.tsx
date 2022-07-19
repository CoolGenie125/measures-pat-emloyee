/** @format */

import axios from "axios";
import { REQUEST_API_URL } from "config/constant";

export const bigCategoryAPI = async (params: number) => {
  try {
    const response = await axios.get(`${REQUEST_API_URL}/categories/${params}`);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const smallCategoryAPI = async (paramsL: number, paramsB: number) => {
  try {
    const response = await axios.get(
      `${REQUEST_API_URL}/categories/${paramsL}/${paramsB}`
    );
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const addCategoryAPI = async (data: FormData) => {
  try {
    const response = await axios.post(`${REQUEST_API_URL}/categories`, data);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};
