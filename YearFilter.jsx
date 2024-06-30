// YearFilter.jsx

import React from 'react';

const YearFilter = ({ selectedYear, onYearChange }) => {
  const years = [2005, 2006, 2007, 2008]; // Years to display

  return (
    <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearFilter;
