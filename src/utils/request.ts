import axios from "axios";

const makeRequest = async (options: any) => {
  try {
    return await axios(options);
  } catch ({ response }) {
    return response;
  }
};

export { makeRequest };
