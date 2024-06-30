import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  if (!data) {
    return null; // or some default UI for no data
  }

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Product Count',
        data: Object.values(data),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;


