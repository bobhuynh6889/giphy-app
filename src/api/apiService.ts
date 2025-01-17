import axios, { AxiosRequestHeaders, Method } from 'axios';
import Constants from 'expo-constants';

const axiosInstance = axios.create({
  baseURL: Constants?.expoConfig?.extra?.BASE_URL,
});

export const apiService = async (
  method: Method,
  endpoint: string,
  data?: Record<string, any>,
  headers?: AxiosRequestHeaders
) => {
  try {
    const response = await axiosInstance({
      method,
      url: endpoint,
      data,
      headers,
    });
    return response?.data;
  } catch (error) {
    console.error('error: ', error);
  }
};
