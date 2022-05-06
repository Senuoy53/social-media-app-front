import axios from "axios";
import { BACK_URL } from "../variables";

const makeRequest = async (options: any) => {
  try {
    return await axios(options);
  } catch ({ response }) {
    return response;
  }
};

const axiosApi = axios.create({
  baseURL: `${BACK_URL}`,
});

export { makeRequest, axiosApi };
