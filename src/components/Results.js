import React from 'react';

const Results = ({ results, origin, destination }) => {
  return (
    <div className="results">
      {results.length === 0 ? (
        <div className="no-results">Try another search route.</div>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result-card">
            <div className="logo">Logo</div> {/* Placeholder for the airline logo */}
            <div className="program">{result.partner_program}</div>
            <div className="route">{origin} &rarr; {destination}</div>
            <div className="date-range">2024-07-09 &rarr; 2024-10-07</div>
            <div className="miles">
              {result.min_business_miles !== null ? (
                <>
                  <span className="miles-value">{result.min_business_miles}</span> + ${result.min_business_tax} Min Business Miles
                </>
              ) : (
                'N/A Min Business Miles'
              )}
            </div>
            <div className="miles">
              {result.min_economy_miles !== null ? (
                <>
                  <span className="miles-value">{result.min_economy_miles}</span> + ${result.min_economy_tax} Min Economy Miles
                </>
              ) : (
                'N/A Min Economy Miles'
              )}
            </div>
            <div className="miles">
              {result.min_first_miles !== null ? (
                <>
                  <span className="miles-value">{result.min_first_miles}</span> + ${result.min_first_tax} Min First Miles
                </>
              ) : (
                'N/A Min First Miles'
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Results;


