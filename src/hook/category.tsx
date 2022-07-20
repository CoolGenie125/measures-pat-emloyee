/** @format */

import axios from "axios";
import qs from "qs";

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

export const addCategoryAPI = async (data: any) => {
  try {
    console.log("create params : ", data);
    const response = await axios.post(
      `${REQUEST_API_URL}/categories`,
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("category create info: ", response);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const updateCategoryAPI = async (itemId: number, name: string) => {
  try {
    const response = await axios.post(
      `${REQUEST_API_URL}/categories/${itemId}`,
      name
    );
    console.log("category update info: ", response);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const deleteCategoryAPI = async (itemId: number) => {
  try {
    const response = await axios.delete(
      `${REQUEST_API_URL}/categories/${itemId}`
    );
    console.log("category delete info: ", response);
    return response.data;
  } catch (error: any) {
    return console.log(error);
  }
};
