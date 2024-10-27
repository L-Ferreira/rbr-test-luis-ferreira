import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import StandingsTable from '@/components/standings';
import { getDriverStandings } from '@/services';
import { DriverStanding } from '@/services/api/types';

jest.mock('../services', () => ({
  getDriverStandings: jest.fn(),
}));

const mockedGetDriverStandings = getDriverStandings as jest.MockedFunction<
  typeof getDriverStandings
>;

describe('StandingsTable', () => {
  const mockData: DriverStanding[] = [
    {
      driverName: 'Max Verstappen',
      position: 1,
      driverCountry: 'NL',
      constructorName: 'Oracle Red Bull Racing',
      totalPoints: 575,
    },
    {
      driverName: 'Sergio Perez',
      position: 2,
      driverCountry: 'MX',
      constructorName: 'Oracle Red Bull Racing',
      totalPoints: 285,
    },
  ];

  beforeEach(() => {
    mockedGetDriverStandings.mockResolvedValue(mockData);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('displays loading state initially', async () => {
    render(<StandingsTable season={2023} />);
    await waitFor(() => {
      expect(screen.getByTestId('loading-standings')).toBeInTheDocument();
    });
  });

  it('renders the standings table', async () => {
    render(<StandingsTable season={2023} />);

    await waitFor(() => {
      expect(screen.getByTestId('standings-table-container')).toBeInTheDocument();
    });

    const title = screen.getByTestId('standings-table-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('2023 Driver Standings');

    expect(screen.getByText('Max Verstappen')).toBeInTheDocument();
    expect(screen.getByText('Sergio Perez')).toBeInTheDocument();
  });

  it('displays an error message when the API request fails', async () => {
    mockedGetDriverStandings.mockRejectedValueOnce(new Error('API request failed'));
    render(<StandingsTable season={2023} />);

    await waitFor(() => {
      expect(screen.getByTestId('error-fetching-standings')).toBeInTheDocument();
    });
  });
});
