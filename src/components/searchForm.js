import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('SYD');
  const [destination, setDestination] = useState('JFK');
  const [cabin, setCabin] = useState('economy');
  const [proFilters, setProFilters] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, cabin, proFilters });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Choose Origin & Destination Airports:</h4>
      <div className='origin addWidth'>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="JFK">JFK</option>
          <option value="DEL">DEL</option>
          <option value="SYD">SYD</option>
          <option value="BOM">BOM</option>
          <option value="BNE">BNE</option>
          <option value="BLR">BLR</option>
        </select>
      </div>
      <div className='destination addWidth'>
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="JFK">JFK</option>
          <option value="DEL">DEL</option>
          <option value="SYD">SYD</option>
          <option value="LHR">LHR</option>
          <option value="CDG">CDG</option>
          <option value="DOH">DOH</option>
          <option value="SIN">SIN</option>
        </select>
      </div>
      <div className='cabin addWidth'>
        <select value={cabin} onChange={(e) => setCabin(e.target.value)}>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First</option>
        </select>
      </div>
      <div className='proFilter addWidth'>
        <label>
          <input type="checkbox" checked={proFilters} onChange={() => setProFilters(!proFilters)} />
          Show Pro Filters
        </label>
      </div>
      <div className='button addWidth'>
      <button className='submit' type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;


