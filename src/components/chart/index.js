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

const mockData = {
  labels: ['Jan', 'Feb', 'March'],
  datasets: [
    {
      label: 'savings amount',
      data: [1, 2, 3],
      borderColor: 'red'
    },
    {
      label: 'another savings',
      data: [4, 5, 9]
    }
  ]
}

const Chart = ({ data }) => {
  return <Line data={mockData} />;
}

export default Chart;
