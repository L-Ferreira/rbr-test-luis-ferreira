import { render, screen, waitFor } from '@testing-library/react';
import OracleInPractice from '@/pages/oracle-in-practice';

// this is needed for the Carousel
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: matchingMediaQueries.includes(query),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  })),
});

let matchingMediaQueries: string[] = [];

export function setMatchingMediaQuery(queries: string | string[]): void {
  matchingMediaQueries = Array.isArray(queries) ? queries : [queries];
}

export function resetMatchingMediaQuery(): void {
  matchingMediaQueries = [];
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

describe('Oracle In Practice', () => {
  beforeEach(() => {
    render(<OracleInPractice />);
  });
  it('renders the page title', async () => {
    await waitFor(() => {
      const title = screen.getByTestId('oracle-practice-page-title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Oracle In Practice');
    });
  });
  it('renders the carousel and items', () => {
    const carousel = screen.getByTestId('oracle-practice-carousel');
    expect(carousel).toBeInTheDocument();

    const items = screen.getAllByTestId('oracle-practice-carousel-item');
    expect(items).toHaveLength(3);

    const expectedLinks = [
      {
        name: 'Oracle Virtual Lap in Monza Virtual Lap 6 min read',
        href: 'https://www.redbullracing.com/int-en/videos/oracle-virtual-laps-2023-monza',
      },
      {
        name: 'Oracle Strategy Guide Oracle Strategy Guide 4 min',
        href: 'https://www.redbullracing.com/int-en/videos/mexico-city-grand-prix-2024-oracle-strategy-guide/',
      },
      {
        name: 'Oracle Cloud Telemetry Data Checo Data 3 min read',
        href: 'https://www.oracle.com/',
      },
    ];

    items.forEach((item, index) => {
      const link = screen.getByRole('link', { name: expectedLinks[index].name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', expectedLinks[index].href);
    });
  });
});
