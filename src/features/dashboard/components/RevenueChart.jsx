import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Online Sales',
        data: [14, 17, 6, 16, 12, 17, 21],
        backgroundColor: '#0095FF',
        borderRadius: 2,
        barThickness: 9,
      },
      {
        label: 'Offline Sales',
        data: [13, 12, 23, 7, 11, 14, 11],
        backgroundColor: '#00E096',
        borderRadius: 2,
        barThickness: 9,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
          padding: 16,
          color: '#737791',
          font: { size: 9, weight: '600' },
        },
      },
      tooltip: {
        backgroundColor: '#15134F',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 8,
        padding: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 25,
        grid: { color: '#F1F4F9', drawBorder: false },
        ticks: {
          stepSize: 5,
          color: '#B8BBD0',
          font: { size: 8 },
          callback: (value) => `${value}k`,
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#8B8FA7', font: { size: 8 } },
      },
    },
    layout: { padding: { top: 4, right: 8, left: 0, bottom: 0 } },
  };

  return (
    <div className="dashboard-card overflow-hidden xl:h-[250px]">
      <h3 className="dashboard-title">Total Revenue</h3>
      <div className="mt-3 h-[220px] xl:h-[195px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
