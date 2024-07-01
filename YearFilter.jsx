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



/////////////////////////////////////////////////////////////////////////////


// import React from 'react';

// const YearFilter = ({ selectedYear, onYearChange, filterType }) => {
//   const years = [2005, 2006, 2007, 2008];

//   return (
//     <div>
//       <label htmlFor={`year-select-${filterType}`}>Select Year ({filterType}): </label>
//       <select
//         id={`year-select-${filterType}`}
//         value={selectedYear}
//         onChange={(e) => onYearChange(e.target.value)}
//       >
//         {years.map((year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default YearFilter;



//////////////////////////////////////////////////////////////////////////////
// YearFilter.jsx

import React from 'react';

const YearFilter = ({ selectedYear, onYearChange, filterType }) => {
  const years = [];
  for (let year = 2005; year <= 2020; year++) {
    years.push(year);
  }

  return (
    <div className="year-filter">
      <label>{filterType} Year:</label>
      <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
