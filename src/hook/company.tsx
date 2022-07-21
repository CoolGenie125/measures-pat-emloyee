/** @format */

import axios from "axios";
import qs from "qs";
import { REQUEST_API_URL } from "config/constant";

export const createCompanyAPI = async (data: any) => {
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
