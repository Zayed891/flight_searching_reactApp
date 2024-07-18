import React, { useState } from 'react';
import SearchForm from './components/searchForm';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = async ({ origin, destination, cabin, proFilters }) => {
    const headers = {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    };

    const json_data = {
      origin,
      destination,
      partnerPrograms: [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
      ],
      stops: 2,
      departureTimeFrom: '2024-07-09T00:00:00Z',
      departureTimeTo: '2024-10-07T00:00:00Z',
      isOldData: false,
      limit: 302,
      offset: 0,
      cabinSelection: [cabin],
      date: '2024-07-09T12:00:17.796Z',
    };

    try {
      const response = await fetch('https://cardgpt.in/apitest', {
        method: 'POST',
        headers,
        body: JSON.stringify(json_data),
      });
      const data = await response.json();
      setResults(data.data || []);
      setSearchParams({ origin, destination });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <div className="main">
       <SearchForm onSearch={handleSearch} />
      </div>
      <div className="results">
       <Results results={results} origin={searchParams.origin} destination={searchParams.destination} />
      </div>
    </div>
  );
};

export default App;



