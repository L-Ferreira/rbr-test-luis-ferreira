import React, { useState, useEffect } from 'react';

import { DriverStanding } from 'src/services/api/types';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getDriverStandings } from 'src/services';

export default function StandingsTable() {
  const [standings, setStandings] = useState<DriverStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const season = 2023;
  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true);
        const data = await getDriverStandings(season);
        setStandings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [season]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="text-white">Loading standings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="text-redbull-red">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 min-h-screen  p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        2023 Driver Standings
      </h1>
      <DataTable columns={columns} data={standings} />
    </div>
  );
}
