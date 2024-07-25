import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const apiCall = async (endpoint, method, data = null) => {
  try {
    const response = await axiosInstance({
      url: endpoint,
      method: method,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

export default apiCall;
