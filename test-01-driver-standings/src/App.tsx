import React from 'react';
import StandingsTable from './components/standings';
import './App.css';

const App = () => {
  return (
    <div className="App bg-redbull-blue text-white">
      <StandingsTable season={2023} />
    </div>
  );
};

export default App;
