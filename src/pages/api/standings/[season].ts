import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { transformDriverData } from '@/lib/utils';
import { DriverStandingResponse } from '@/services/api/types';

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REDBULL_API_KEY,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { season } = req.query;

  try {
    const response = await apiClient.get<DriverStandingResponse[]>(`/api/stats/drivers/${season}`);
    const transformedData = transformDriverData(response.data);
    res.status(200).json(transformedData);
  } catch (error) {
    console.error('Error fetching driver standings:', error);
    res.status(500).json({ error: 'Failed to fetch driver standings' });
  }
};

export default handler;
