import axios from 'axios';
import { DriverStanding, DriverStandingResponse } from './types';
import { transformDriverData } from 'src/lib/utils';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_REDBULL_API_KEY,
  },
});

export const getDriverStandings = async (season: number): Promise<DriverStanding[]> => {
  try {
    const response = await apiClient.get<DriverStandingResponse[]>(`/${season}`);
    return transformDriverData(response.data);
  } catch (error) {
    console.error('Error fetching driver standings:', error);
    throw error;
  }
};
