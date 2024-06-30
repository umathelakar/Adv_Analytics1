import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
      },
    ],
  };

  return <Pie ref={chartRef} data={chartData} />;
};

export default PieChart;


// import React, { useEffect, useRef } from 'react';
// import { Pie } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

// const PieChart = ({ data, selectedYear, handleYearChange }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chartInstance = chartRef.current;

//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, [data]);

//   const chartData = {
//     labels: Object.keys(data),
//     datasets: [
//       {
//         data: Object.values(data),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
//       },
//     ],
//   };

//   return (
//     <div>
//       <Pie ref={chartRef} data={chartData} />
//       <div className="year-filter">
//         <select value={selectedYear} onChange={(e) => handleYearChange(e.target.value)}>
//           <option value={2005}>2005</option>
//           <option value={2006}>2006</option>
//           <option value={2007}>2007</option>
//           <option value={2008}>2008</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default PieChart;
