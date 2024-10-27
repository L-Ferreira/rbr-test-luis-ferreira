import axios from 'axios';
import { DriverStanding } from './types';


import { debounce } from 'lodash';

const makeRequest = async (season: number): Promise<DriverStanding[]> => {
  try {
    const response = await axios.get<DriverStanding[]>(`/api/standings/${season}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching driver standings:', error);
    throw error;
  }
};

export const getDriverStandings = debounce(makeRequest, 500, {
  leading: true,
  trailing: false,
  maxWait: 2000,
});

