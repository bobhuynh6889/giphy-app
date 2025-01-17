import Constants from 'expo-constants';
import { apiService } from './apiService';
import endpoints from './endpoints';
import { handleApiResponse } from './handleApiResponse';
import { ResponseModel } from '../models';

const params = {
  api_key: Constants?.expoConfig?.extra?.API_KEY,
  limit: 15,
};

export const getTrendingGifs = async (offset: number = 0): Promise<ResponseModel | undefined> => {
  Object.assign(params, { offset });
  const response = await apiService('GET', endpoints.trending(params));
  const { meta } = response;
  return handleApiResponse(meta?.status, response);
};

export const searchGifs = async (offset: number = 0, query?: string): Promise<ResponseModel | undefined> => {
  const paramSearch = { q: query, offset };
  Object.assign(params, paramSearch);
  const response = await apiService('GET', endpoints.searching(params));
  const { meta } = response;
  return handleApiResponse(meta?.status, response);
};
