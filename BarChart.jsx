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


///////////////////////////////////////////////////////////////////////////////
// BarChart.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Stocks',
        data: Object.values(data).map((stateData) => stateData.Stocks),
        backgroundColor: '#FF6384',
      },
      {
        label: 'Bonds',
        data: Object.values(data).map((stateData) => stateData.Bonds),
        backgroundColor: '#36A2EB',
      },
      {
        label: 'ETFs',
        data: Object.values(data).map((stateData) => stateData.ETFs),
        backgroundColor: '#FFCE56',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'US States vs Products Handled',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'States',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Products Handled',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
