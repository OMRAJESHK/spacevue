import axios from "axios";

const httpCall =
  (method) =>
  async (url, payload = {}) => {
    const options = { method, url };

    if (method === "GET") {
      options.params = payload;
    }

    try {
      const response = await axios.request(options);
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const GET = httpCall("GET");

export const withCatch = async (promise, ...delegate) => {
  try {
    const response = await promise(...delegate);
    return { error: {}, response };
  } catch (err) {
    return [err];
  }
};
