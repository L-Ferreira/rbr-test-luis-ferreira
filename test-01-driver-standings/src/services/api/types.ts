export type DriverStanding = {
  driverName: string;
  position: number;
  driverCountry: string;
  constructorName: string;
  totalPoints: number;
};

export type DriverStandingResponse = {
  driver_uuid: string;
  first_name: string;
  last_name: string;
  driver_country_code: string;
  team_uuid: string;
  season_team_name: string;
  season_points: number;
  driver_wins: number;
  driver_poles: number;
  driver_podiums: number;
  driver_fastest_laps: number;
};
