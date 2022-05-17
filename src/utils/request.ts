import axios from "axios";
import { BACK_URL, BACK_URL_API } from "../variables";

const makeRequest = async (options: any) => {
  try {
    return await axios(options);
  } catch ({ response }) {
    return response;
  }
};

const axiosAuthApi = axios.create({
  baseURL: `${BACK_URL}`,
});

const axiosApi = axios.create({
  baseURL: `${BACK_URL_API}`,
});

export { makeRequest, axiosAuthApi, axiosApi };
