import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      grid: {
        color: "#6a89cc"
      },
      ticks: {
        color: "#3c6382",
        beginAtZero: true
      }
    },
    x: {
      grid: {
        color: "#6a89cc"
      },
      ticks: {
        color: "#3c6382",
        beginAtZero: true
      }
    }
  }
}

const getDataByProjection = projection => {
  return {
    labels: [0, ...projection.map(({ month }) => month)],
    datasets: [
      {
        label: 'Amount Saved',
        data: [0, ...projection.map(({ amountSaved }) => amountSaved)],
        borderColor: '#3c6382'
      }
    ]
  }
}

const Chart = ({ projection }) => {
  const data = getDataByProjection(projection);

  return <Line data={data} options={options} />;
}

export default Chart;
