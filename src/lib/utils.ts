import { DriverStanding, DriverStandingResponse } from "@/services/api/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to sort and map driver data to DriverStanding format
export const transformDriverData = (drivers: DriverStandingResponse[]): DriverStanding[] => {
  // Sort the drivers by season_points in descending order
  const sortedDrivers = drivers.sort((a, b) => b.season_points - a.season_points);

  // Transform the sorted response data to the DriverStanding format
  return sortedDrivers.map((driver, index) => ({
    driverName: `${driver.first_name} ${driver.last_name}`,
    position: index + 1, // Position is based on the sorted array
    driverCountry: driver.driver_country_code,
    constructorName: driver.season_team_name,
    totalPoints: driver.season_points,
  }));
};
