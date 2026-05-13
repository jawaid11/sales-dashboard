import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const VisitorInsights = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const julyMarker = {
    id: 'julyMarker',
    afterDatasetsDraw: (chart) => {
      const { ctx, chartArea, scales } = chart;
      const x = scales.x.getPixelForValue('Jul');

      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([2, 3]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 72, 72, 0.45)';
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      ctx.restore();
    },
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Loyal Customers',
        data: [305, 335, 300, 240, 190, 220, 285, 320, 300, 245, 170, 140],
        borderColor: '#B000FF',
        backgroundColor: '#B000FF',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
      {
        label: 'New Customers',
        data: [260, 245, 185, 135, 140, 245, 325, 360, 330, 270, 190, 135],
        borderColor: '#FF4848',
        backgroundColor: '#FF4848',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#FF5A5F',
        pointBorderColor: '#FF5A5F',
        pointRadius: labels.map((label) => (label === 'Jul' ? 5 : 0)),
        pointHoverRadius: 6,
        pointStyle: 'circle',
      },
      {
        label: 'Unique Customers',
        data: [280, 335, 360, 330, 275, 215, 240, 280, 315, 295, 245, 205],
        borderColor: '#32D957',
        backgroundColor: '#32D957',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: false,
          boxWidth: 9,
          boxHeight: 9,
          padding: 12,
          color: '#4B5563',
          font: {
            size: 9,
            weight: '600',
          },
        },
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#F9FAFB',
        bodyColor: '#D1D5DB',
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 400,
        min: 0,
        grid: {
          color: '#F1F4F9',
          drawBorder: false,
          lineWidth: 1,
        },
        ticks: {
          stepSize: 100,
          callback: (value) => value,
          color: '#BAC4D4',
          font: {
            size: 10,
          },
        },
        title: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#8A94A6',
          font: {
            size: 9,
          },
          maxRotation: 0,
          autoSkip: false,
        },
      },
    },
    layout: {
      padding: {
        left: 2,
        right: 4,
        top: 12,
        bottom: 0,
      },
    },
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(149,157,165,0.10)] xl:h-[250px]">
      <h3 className="text-[15px] leading-5 font-bold text-[#15134F] mb-3">Visitor Insights</h3>
      <div className="h-[220px] w-full sm:h-[230px] xl:h-[195px]">
        <Line data={data} options={options} plugins={[julyMarker]} />
      </div>
    </div>
  );
};

export default VisitorInsights;
