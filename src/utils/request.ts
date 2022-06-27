import axios from "axios";
import { API_URL } from "../variables";

const makeRequest = async (options: any) => {
  try {
    return await axios(options);
  } catch ({ response }) {
    return response;
  }
};

const axiosAuthApi = axios.create({
  baseURL: `${API_URL}/auth`,
});

const axiosApi = axios.create({
  baseURL: `${API_URL}`,
});

export { makeRequest, axiosAuthApi, axiosApi };
