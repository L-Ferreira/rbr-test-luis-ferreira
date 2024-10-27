import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders the home page banner', () => {
    const title = screen.getByTestId('hero-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Monaco Grand Prix');

    const description = screen.getByTestId('hero-description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('26 – 28 MAY 2023');
    expect(description).toHaveTextContent('Monaco');
  });
  it('renders the homepage race schedule', () => {
    const schedule = screen.getByTestId('race-schedule');
    expect(schedule).toBeInTheDocument();

    const friday = screen.getByTestId('session-Friday');
    expect(friday).toBeInTheDocument();
    expect(friday).toHaveTextContent('26th');

    const saturday = screen.getByTestId('session-Saturday');
    expect(saturday).toBeInTheDocument();
    expect(saturday).toHaveTextContent('27th');

    const sunday = screen.getByTestId('session-Sunday');
    expect(sunday).toBeInTheDocument();
    expect(sunday).toHaveTextContent('28th');

    const practice1 = screen.getByTestId('Practice 1-session-description');
    expect(practice1).toBeInTheDocument();
    expect(practice1).toHaveTextContent('Practice 1');
    expect(practice1).toHaveTextContent('13:30 - 14:30');

    const practice2 = screen.getByTestId('Practice 2-session-description');
    expect(practice2).toBeInTheDocument();
    expect(practice2).toHaveTextContent('Practice 2');
    expect(practice2).toHaveTextContent('17:00 - 18:00');

    const practice3 = screen.getByTestId('Practice 3-session-description');
    expect(practice3).toBeInTheDocument();
    expect(practice3).toHaveTextContent('Practice 3');
    expect(practice3).toHaveTextContent('12:30 - 13:30');

    const qualifying = screen.getByTestId('Qualifying-session-description');
    expect(qualifying).toBeInTheDocument();
    expect(qualifying).toHaveTextContent('Qualifying');
    expect(qualifying).toHaveTextContent('16:00 - 17:00');

    const grandPrix = screen.getByTestId('Grand Prix-session-description');
    expect(grandPrix).toBeInTheDocument();
    expect(grandPrix).toHaveTextContent('Grand Prix');
    expect(grandPrix).toHaveTextContent('15:00 - 17:00');
  });
});
