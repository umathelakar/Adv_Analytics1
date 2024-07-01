//working//
// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import YearFilter from './YearFilter';
// import PieChart from './PieChart';
// import './AdvisorAnalytics.css';

// const fetchAdvisorData = (name) => {
//   // Replace with your actual data fetching logic
//   const advisors = {
//     'John Doe': {
//       2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
//       2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
//       2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
//       2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
//     },
//     'Jane Smith': {
//       2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
//       2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
//       2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
//       2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
//     },
//   };

//   const lowerCaseName = name.toLowerCase();
//   const advisor = Object.keys(advisors).find((advisorName) =>
//     advisorName.toLowerCase().includes(lowerCaseName)
//   );

//   console.log("Fetching data for:", name);
//   return advisors[advisor] || null;
// };

// const AdvisorAnalytics = () => {
//   const [advisorName, setAdvisorName] = useState('');
//   const [advisorData, setAdvisorData] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(2005);

//   useEffect(() => {
//     if (advisorName) {
//       handleSearch(advisorName);
//     }
//   }, [advisorName]);

//   const handleSearch = (name) => {
//     const data = fetchAdvisorData(name);
//     console.log("Fetched data:", data);
//     setAdvisorData(data);
//     // Reset selected year to default (2005) when searching new advisor
//     setSelectedYear(2005);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(Number(year));
//   };

//   return (
//     <div className="advisor-analytics">
//       <div className="navbar">Navbar</div>
//       <SearchBar onSearch={setAdvisorName} />
//       {advisorData && (
//         <>
//           <div className="year-filter">
//             <YearFilter selectedYear={selectedYear} onYearChange={handleYearChange} />
//           </div>
//           <div className="content">
//             <div className="left-sidebar">
//               <h2>Advisor Details</h2>
//               <div>
//                 <p>{`Advisor: ${Object.keys(advisorData).join(', ')}`}</p>
//               </div>
//             </div>
//             <div className="main-content">
//               <div className="top-section">
//                 <div className="pie-chart">
//                   <PieChart key={`${advisorName}-${selectedYear}`} data={advisorData[selectedYear]} />
//                 </div>
//                 <div className="us-map">
//                   <h2>US Map</h2>
//                   <p>Map placeholder</p>
//                 </div>
//               </div>
//               <div className="bar-graph">
//                 <h2>Bar Graph</h2>
//                 <p>Bar Graph placeholder</p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdvisorAnalytics;






//not working
// // AdvisorAnalytics.jsx

// import React, { useState } from 'react';
// import SearchBar from './SearchBar';
// import YearFilter from './YearFilter';
// import PieChart from './PieChart';
// import AdvisorDetails from './AdvisorDetails';
// import './AdvisorAnalytics.css';

// const fetchAdvisorData = (name) => {
//   // Replace with your actual data fetching logic
//   const advisors = {
//     'John Doe': {
//       repCode: 'JD123',
//       empId: 'E001',
//       customers: ['Customer A', 'Customer B', 'Customer C'],
//       2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
//       2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
//       2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
//       2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
//     },
//     'Jane Smith': {
//       repCode: 'JS456',
//       empId: 'E002',
//       customers: ['Customer X', 'Customer Y', 'Customer Z'],
//       2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
//       2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
//       2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
//       2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
//     },
//   };

//   const lowerCaseName = name.toLowerCase();
//   const advisor = Object.keys(advisors).find((advisorName) =>
//     advisorName.toLowerCase().includes(lowerCaseName)
//   );

//   console.log("Fetching data for:", name);
//   return advisors[advisor] || null;
// };

// const AdvisorAnalytics = () => {
//   const [advisorData, setAdvisorData] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(2005);

//   const handleSearch = (name) => {
//     const data = fetchAdvisorData(name);
//     console.log("Fetched data:", data);
//     setAdvisorData(data);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(Number(year));
//   };

//   return (
//     <div className="advisor-analytics">
//       <div className="navbar">Navbar</div>
//       <SearchBar onSearch={handleSearch} />
//       <div className="year-filter">
//         <YearFilter selectedYear={selectedYear} onYearChange={handleYearChange} />
//       </div>
//       <div className="content">
//         <div className="advisor-details-container">
//           <AdvisorDetails advisor={advisorData} />
//         </div>
//         <div className="main-content">
//           <div className="top-section">
//             <div className="pie-chart-placeholder">
//               <PieChart data={advisorData ? advisorData[selectedYear] : null} />
//             </div>
//             <div className="us-map">
//               <h2>US Map</h2>
//               <p>Map placeholder</p>
//             </div>
//           </div>
//           <div className="bar-graph">
//             <h2>Bar Graph</h2>
//             <p>Bar Graph placeholder</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvisorAnalytics;



//not working
// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import YearFilter from './YearFilter';
// import PieChart from './PieChart';
// import './AdvisorAnalytics.css';

// const fetchAdvisorData = (name) => {
//   // Replace with your actual data fetching logic
//   const advisors = {
//     'John Doe': {
//       2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
//       2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
//       2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
//       2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
//     },
//     'Jane Smith': {
//       2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
//       2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
//       2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
//       2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
//     },
//   };

//   const lowerCaseName = name.toLowerCase();
//   const advisor = Object.keys(advisors).find((advisorName) =>
//     advisorName.toLowerCase().includes(lowerCaseName)
//   );

//   console.log("Fetching data for:", name);
//   return advisors[advisor] || null;
// };

// const AdvisorAnalytics = () => {
//   const [advisorName, setAdvisorName] = useState('');
//   const [advisorData, setAdvisorData] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(2005);

//   useEffect(() => {
//     if (advisorName) {
//       handleSearch(advisorName);
//     }
//   }, [advisorName]);

//   const handleSearch = (name) => {
//     const data = fetchAdvisorData(name);
//     console.log("Fetched data:", data);
//     setAdvisorData(data);
//     // Reset selected year to default (2005) when searching new advisor
//     setSelectedYear(2005);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(Number(year));
//   };

//   return (
//     <div className="advisor-analytics">
//       <div className="navbar">Navbar</div>
//       <SearchBar onSearch={setAdvisorName} />
//       {advisorData && (
//         <>
//           <div className="content">
//             <div className="left-sidebar">
//               <h2>Advisor Details</h2>
//               <div>
//                 <p>{`Advisor: ${Object.keys(advisorData).join(', ')}`}</p>
//               </div>
//             </div>
//             <div className="main-content">
//               <PieChart
//                 data={advisorData[selectedYear]}
//                 selectedYear={selectedYear}
//                 handleYearChange={handleYearChange}
//               />
//               <div className="us-map">
//                 <h2>US Map</h2>
//                 <p>Map placeholder</p>
//               </div>
//               <div className="bar-graph">
//                 <h2>Bar Graph</h2>
//                 <p>Bar Graph placeholder</p>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdvisorAnalytics;


//not working
// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import YearFilter from './YearFilter';
// import PieChart from './PieChart';
// import BarChart from './BarChart';
// import './AdvisorAnalytics.css';

// const fetchAdvisorData = (name) => {
//   // Replace with your actual data fetching logic
//   const advisors = {
//     'John Doe': {
//       2005: { Stocks: ['California', 'New York', 'Texas'], Bonds: ['California', 'Florida'] },
//       2006: { Stocks: ['California', 'Texas'], ETFs: ['New York', 'Texas'] },
//       // Add more years and data as needed
//     },
//     'Jane Smith': {
//       2005: { Stocks: ['California', 'Florida', 'Texas'], RealEstate: ['New York', 'Texas'] },
//       2006: { Stocks: ['California', 'Texas'], ETFs: ['New York', 'Texas'] },
//       // Add more years and data as needed
//     },
//     // Add more advisors as needed
//   };

//   const lowerCaseName = name.toLowerCase();
//   const advisor = Object.keys(advisors).find((advisorName) =>
//     advisorName.toLowerCase().includes(lowerCaseName)
//   );

//   console.log("Fetching data for:", name);
//   return advisors[advisor] || null;
// };

// const AdvisorAnalytics = () => {
//   const [advisorName, setAdvisorName] = useState('');
//   const [advisorData, setAdvisorData] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(2005);

//   useEffect(() => {
//     if (advisorName) {
//       handleSearch(advisorName);
//     }
//   }, [advisorName]);

//   const handleSearch = (name) => {
//     const data = fetchAdvisorData(name);
//     console.log("Fetched data:", data);
//     setAdvisorData(data);
//     // Reset selected year to default (2005) when searching new advisor
//     setSelectedYear(2005);
//   };

//   const handleYearChange = (year) => {
//     setSelectedYear(Number(year));
//   };

//   return (
//     <div className="advisor-analytics">
//       <div className="navbar">Navbar</div>
//       <SearchBar onSearch={setAdvisorName} />
//       {advisorData && (
//         <>
//           <div className="content">
//             <div className="left-sidebar">
//               <h2>Advisor Details</h2>
//               <div>
//                 <p>{`Advisor: ${Object.keys(advisorData).join(', ')}`}</p>
//               </div>
//             </div>
//             <div className="main-content">
//               <PieChart
//                 data={advisorData[selectedYear]}
//                 selectedYear={selectedYear}
//                 handleYearChange={handleYearChange}
//               />
//               <div className="us-map">
//                 <h2>US Map</h2>
//                 <p>Map placeholder</p>
//               </div>
//               {/* <div className="bar-graph"> */}
//                 {/* <h2>Bar Graph</h2> */}
//                 {/* <BarChart advisorName={advisorName} advisorData={advisorData[selectedYear]} /> */}
//                 <div className="bar-graph">
//                     <h2>Product vs US States</h2>
//                     {advisorData && advisorData[selectedYear] && advisorData[selectedYear][product] ? (
//                         <BarChart data={advisorData[selectedYear][product]} />
//                      ) : (
//                     <p>No data available</p>
//                  )}
//                 </div>

//               {/* </div> */}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdvisorAnalytics;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//working with pie chart,bar graph(advisor vs products) and advisor details
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import YearFilter from './YearFilter';
import PieChart from './PieChart';
import BarChart from './BarChart';
import './AdvisorAnalytics.css';

const fetchAdvisorData = (name) => {
  // Replace with your actual data fetching logic
  const advisors = {
    'John Doe': {
      rep_code: 'JD001',
      emp_id: 'E001',
      customers: ['Customer A', 'Customer B', 'Customer C'],
      data: {
        2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
        2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
        2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
        2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
      },
    },
    'Jane Smith': {
      rep_code: 'JS001',
      emp_id: 'E002',
      customers: ['Customer X', 'Customer Y', 'Customer Z'],
      data: {
        2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
        2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
        2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
        2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
      },
    },
  };

  const lowerCaseName = name.toLowerCase();
  const advisor = Object.keys(advisors).find((advisorName) =>
    advisorName.toLowerCase().includes(lowerCaseName)
  );

  console.log("Fetching data for:", name);
  return advisors[advisor] || null;
};

const AdvisorAnalytics = () => {
  const [advisorName, setAdvisorName] = useState('');
  const [advisorData, setAdvisorData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2005);

  useEffect(() => {
    if (advisorName) {
      handleSearch(advisorName);
    }
  }, [advisorName]);

  const handleSearch = (name) => {
    const data = fetchAdvisorData(name);
    console.log("Fetched data:", data);
    setAdvisorData(data);
    // Reset selected year to default (2005) when searching new advisor
    setSelectedYear(2005);
  };

  const handleYearChange = (year) => {
    setSelectedYear(Number(year));
  };

  return (
    <div className="advisor-analytics">
      <div className="navbar">Navbar</div>
      <SearchBar onSearch={setAdvisorName} />
      {advisorData && (
        <>
          <div className="year-filter">
            <YearFilter selectedYear={selectedYear} onYearChange={handleYearChange} />
          </div>
          <div className="content">
            <div className="left-sidebar">
              <h2>Advisor Details</h2>
              <div>
                <p>Name: {advisorName}</p>
                <p>Rep Code: {advisorData.rep_code}</p>
                <p>Employee ID: {advisorData.emp_id}</p>
                <p>Customers: {advisorData.customers.join(', ')}</p>
              </div>
            </div>
            <div className="main-content">
              <div className="top-section">
                <div className="pie-chart">
                  <PieChart key={`${advisorName}-${selectedYear}`} data={advisorData.data[selectedYear]} />
                </div>
                <div className="us-map">
                  <h2>US Map</h2>
                  <p>Map placeholder</p>
                </div>
              </div>
              <div className="bar-graph">
                <h2>Bar Graph</h2>
                <BarChart key={`${advisorName}-${selectedYear}`} data={advisorData.data[selectedYear]} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvisorAnalytics;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import YearFilter from './YearFilter';
import PieChart from './PieChart';
import BarChart from './BarChart';
import AdvisorDetails from './AdvisorDetails';
import './AdvisorAnalytics.css';

const fetchAdvisorData = (name) => {
  // Replace with your actual data fetching logic
  const advisors = {
    'John Doe': {
      rep_code: 'JD001',
      emp_id: 'E001',
      customers: ['Customer A', 'Customer B', 'Customer C'],
      data: {
        2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
        2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
        2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
        2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
      },
    },
    'Jane Smith': {
      rep_code: 'JS001',
      emp_id: 'E002',
      customers: ['Customer X', 'Customer Y', 'Customer Z'],
      data: {
        2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
        2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
        2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
        2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
      },
    },
  };

  const lowerCaseName = name.toLowerCase();
  const advisor = Object.keys(advisors).find((advisorName) =>
    advisorName.toLowerCase().includes(lowerCaseName)
  );

  console.log("Fetching data for:", name);
  return advisors[advisor] || null;
};

const AdvisorAnalytics = () => {
  const [advisorName, setAdvisorName] = useState('');
  const [advisorData, setAdvisorData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2005);

  useEffect(() => {
    if (advisorName) {
      handleSearch(advisorName);
    }
  }, [advisorName]);

  const handleSearch = (name) => {
    const data = fetchAdvisorData(name);
    console.log("Fetched data:", data);
    setAdvisorData(data);
    // Reset selected year to default (2005) when searching new advisor
    setSelectedYear(2005);
  };

  const handleYearChange = (year) => {
    setSelectedYear(Number(year));
  };

  return (
    <div className="advisor-analytics">
      <div className="navbar">Navbar</div>
      <SearchBar onSearch={setAdvisorName} />
      {advisorData && (
        <>
          <div className="year-filter">
            <YearFilter selectedYear={selectedYear} onYearChange={handleYearChange} />
          </div>
          <div className="content">
            <div className="left-sidebar">
              <AdvisorDetails advisor={advisorData} advisorName={advisorName} />
            </div>
            <div className="main-content">
              <div className="top-section">
                <div className="pie-chart">
                  <PieChart key={`${advisorName}-${selectedYear}`} data={advisorData.data[selectedYear]} />
                </div>
                <div className="us-map">
                  <h2>US Map</h2>
                  <p>Map placeholder</p>
                </div>
              </div>
              <div className="bar-graph">
                <h2>Bar Graph</h2>
                <BarChart key={`${advisorName}-${selectedYear}`} data={advisorData.data[selectedYear]} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvisorAnalytics;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AdvisorAnalytics.jsx

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import YearFilter from './YearFilter';
import PieChart from './PieChart';
import BarChart from './BarChart';
import AdvisorDetails from './AdvisorDetails';
import './AdvisorAnalytics.css';

const fetchAdvisorData = (name) => {
  // Replace with your actual data fetching logic
  const advisors = {
    'John Doe': {
      name: 'John Doe',
      rep_code: 'JD001',
      emp_id: 'E001',
      customers: ['Customer A', 'Customer B', 'Customer C'],
      data: {
        2005: { Stocks: 40, Bonds: 30, ETFs: 20, MutualFunds: 10 },
        2006: { Stocks: 50, Bonds: 20, ETFs: 20, MutualFunds: 10 },
        2007: { Stocks: 30, Bonds: 40, ETFs: 20, MutualFunds: 10 },
        2008: { Stocks: 20, Bonds: 30, ETFs: 30, MutualFunds: 20 },
      },
      states: {
        2005: {
          'California': { Stocks: 20, Bonds: 10, ETFs: 5 },
          'Texas': { Stocks: 15, Bonds: 15, ETFs: 5 },
          'New York': { Stocks: 5, Bonds: 5, ETFs: 10 },
        },
        2006: {
          'California': { Stocks: 25, Bonds: 10, ETFs: 10 },
          'Texas': { Stocks: 20, Bonds: 10, ETFs: 5 },
          'New York': { Stocks: 5, Bonds: 10, ETFs: 5 },
        },
        // Add more years and states if necessary
      },
    },
    'Jane Smith': {
      name: 'Jane Smith',
      rep_code: 'JS001',
      emp_id: 'E002',
      customers: ['Customer X', 'Customer Y', 'Customer Z'],
      data: {
        2005: { Stocks: 50, Bonds: 20, ETFs: 10, RealEstate: 20 },
        2006: { Stocks: 60, Bonds: 10, ETFs: 10, RealEstate: 20 },
        2007: { Stocks: 40, Bonds: 30, ETFs: 10, RealEstate: 20 },
        2008: { Stocks: 30, Bonds: 40, ETFs: 20, RealEstate: 10 },
      },
      states: {
        2005: {
          'California': { Stocks: 10, Bonds: 5, ETFs: 10 },
          'Texas': { Stocks: 20, Bonds: 10, ETFs: 5 },
          'Florida': { Stocks: 15, Bonds: 10, ETFs: 5 },
          'Alaska': { Stocks: 25, Bonds: 40, ETFs: 15 },
        },
        2006: {
          'California': { Stocks: 15, Bonds: 10, ETFs: 10 },
          'Texas': { Stocks: 25, Bonds: 10, ETFs: 5 },
          'Florida': { Stocks: 20, Bonds: 10, ETFs: 5 },
          'Alaska': { Stocks: 10, Bonds: 30, ETFs: 10 },
        },
        // Add more years and states if necessary
      },
    },
  };

  const lowerCaseName = name.toLowerCase();
  const advisor = Object.keys(advisors).find((advisorName) =>
    advisorName.toLowerCase().includes(lowerCaseName)
  );

  console.log("Fetching data for:", name);
  return advisors[advisor] || null;
};

const AdvisorAnalytics = () => {
  const [advisorName, setAdvisorName] = useState('');
  const [advisorData, setAdvisorData] = useState(null);
  const [selectedYearPie, setSelectedYearPie] = useState(2005);
  const [selectedYearBar, setSelectedYearBar] = useState(2005);

  useEffect(() => {
    if (advisorName) {
      handleSearch(advisorName);
    }
  }, [advisorName]);

  const handleSearch = (name) => {
    const data = fetchAdvisorData(name);
    console.log("Fetched data:", data);
    setAdvisorData(data);
    // Reset selected years to default (2005) when searching new advisor
    setSelectedYearPie(2005);
    setSelectedYearBar(2005);
  };

  const handleYearChangePie = (year) => {
    setSelectedYearPie(Number(year));
  };

  const handleYearChangeBar = (year) => {
    setSelectedYearBar(Number(year));
  };

  return (
    <div className="advisor-analytics">
      <div className="navbar">Navbar</div>
      <SearchBar onSearch={setAdvisorName} />
      {advisorData && (
        <>
          <div className="content">
            <div className="left-sidebar">
              <AdvisorDetails advisor={advisorData} />
            </div>
            <div className="main-content">
              <div className="top-section">
                <div className="pie-chart">
                  <YearFilter
                    selectedYear={selectedYearPie}
                    onYearChange={handleYearChangePie}
                    filterType="Pie Chart"
                  />
                  <PieChart key={`${advisorName}-${selectedYearPie}`} data={advisorData.data[selectedYearPie]} />
                </div>
                <div className="us-map">
                  <h2>US Map</h2>
                  <p>Map placeholder</p>
                </div>
              </div>
              <div className="bar-graph">
                <YearFilter
                  selectedYear={selectedYearBar}
                  onYearChange={handleYearChangeBar}
                  filterType="Bar Graph"
                />
                <BarChart key={`${advisorName}-${selectedYearBar}`} data={advisorData.states[selectedYearBar]} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvisorAnalytics;

