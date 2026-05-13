import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend, Filler);

const compactLineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { usePointStyle: true, boxWidth: 6, padding: 14, color: '#737791', font: { size: 9, weight: '600' } },
    },
    tooltip: { backgroundColor: '#15134F', titleColor: '#fff', bodyColor: '#fff', cornerRadius: 8, padding: 8 },
  },
  scales: {
    y: { display: false, grid: { display: false } },
    x: { display: false, grid: { display: false } },
  },
  elements: { point: { radius: 0, hoverRadius: 4 } },
};

export const CustomerSatisfaction = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Last Month',
        data: [58, 63, 47, 47, 53, 52, 62],
        borderColor: '#0095FF',
        backgroundColor: 'rgba(0,149,255,0.18)',
        borderWidth: 2,
        fill: true,
        tension: 0.45,
      },
      {
        label: 'This Month',
        data: [78, 72, 76, 68, 77, 65, 82],
        borderColor: '#00E096',
        backgroundColor: 'rgba(0,224,150,0.12)',
        borderWidth: 2,
        fill: true,
        tension: 0.45,
      },
    ],
  };

  return (
    <div className="dashboard-card overflow-hidden xl:h-[250px]">
      <h3 className="dashboard-title">Customer Satisfaction</h3>
      <div className="mt-2 h-[220px] xl:h-[192px]">
        <Line data={data} options={compactLineOptions} />
      </div>
    </div>
  );
};

export const TargetReality = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    datasets: [
      { label: 'Reality Sales', data: [13, 12, 10, 12, 14, 15, 14], backgroundColor: '#4AB58E', borderRadius: 2, barThickness: 8 },
      { label: 'Target Sales', data: [16, 15, 17, 13, 18, 17, 19], backgroundColor: '#FFCF00', borderRadius: 2, barThickness: 8 },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#15134F', cornerRadius: 8, padding: 8 } },
    scales: {
      y: { display: false, grid: { display: false } },
      x: { grid: { display: false }, ticks: { color: '#B8BBD0', font: { size: 8 } } },
    },
  };

  return (
    <div className="dashboard-card overflow-hidden xl:h-[250px]">
      <h3 className="dashboard-title">Target vs Reality</h3>
      <div className="mt-2 h-[150px] xl:h-[110px]">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-2 space-y-1.5">
        <LegendRow color="#4AB58E" soft="#EAFBF4" title="Reality Sales" subtitle="Global" value="8.823" />
        <LegendRow color="#FFCF00" soft="#FFF8DF" title="Target Sales" subtitle="Commercial" value="12.122" />
      </div>
    </div>
  );
};

const LegendRow = ({ color, soft, title, subtitle, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: soft }}>
        <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
      </span>
      <span>
        <span className="block text-[9px] font-bold leading-[11px] text-[#15134F]">{title}</span>
        <span className="block text-[8px] font-medium leading-[10px] text-[#A0A7BE]">{subtitle}</span>
      </span>
    </div>
    <span className="text-[9px] font-bold" style={{ color }}>{value}</span>
  </div>
);

export const SalesMap = () => (
  <div className="dashboard-card overflow-hidden xl:h-[250px]">
    <h3 className="dashboard-title">Sales Mapping by Country</h3>
    <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg bg-[#FBFCFF] px-2 py-3 md:h-[180px] xl:h-[174px]">
      <svg viewBox="0 0 520 260" className="h-full w-full" aria-label="Sales mapping by country">
        <g fill="#ECEEF2">
          <path d="M52 76l28-15 45-8 38 9 34-7 38 8-15 18-40 8-20 17 7 20-24 16-36-6-20-19-38-9-25-18z" />
          <path d="M180 34l37-12 44 3 28 14-18 16-40 4-31-7z" />
          <path d="M112 142l32 17 20 39-13 38-31-12-19-43z" />
          <path d="M238 96l29-28 48-16 50 10 36 28 31 3 18 28-30 19-41-7-36 17-53-7-27-24z" />
          <path d="M291 151l30 12 24 31-10 35-30-12-20-37z" />
          <path d="M390 144l35 2 38 22 31 8-12 20-34 16-42-15-30-27z" />
          <path d="M428 66l28-12 36 10 18 24-20 17-39-5-28-16z" />
          <path d="M428 216l24-8 31 7 16 15-27 10-37-5z" />
          <path d="M20 103l15-10 15 5-11 16z" />
        </g>

        <g fill="#E5E7EB">
          <path d="M250 101l18-18 38-15 44 8 26 22-18 25-38 12-41-8z" />
          <path d="M330 129l31-12 35 5 22 15-30 13-34-3z" />
          <path d="M78 61l47-8 38 9-10 28-38 17-53-13-19-17z" />
        </g>

        <g>
          <path d="M52 104l18-18 48-12 39 11 9 33-34 23-52-9z" fill="#FFA800" />
          <path d="M111 161l25 10 20 29-17 37-31-17-18-39z" fill="#FF4D5E" />
          <path d="M318 90l39-20 54 14 34 27-31 33-58-8-44-24z" fill="#7C4DFF" />
          <path d="M393 160l35 5 38 22-25 20-43-10-29-26z" fill="#00BFA6" />
          <path d="M289 159l22 13 18 28-15 27-24-18-17-34z" fill="#5B8DEF" />
          <path d="M366 130l18-10 19 9-17 15z" fill="#10B981" />
        </g>

        <g fill="#ECEEF2">
          <circle cx="166" cy="48" r="5" />
          <circle cx="197" cy="44" r="4" />
          <circle cx="474" cy="119" r="4" />
          <circle cx="458" cy="132" r="3" />
        </g>
      </svg>
    </div>
  </div>
);

export const VolumeService = () => {
  const bars = [78, 94, 80, 73, 61, 63];

  return (
    <div className="dashboard-card overflow-hidden xl:h-[250px]">
      <h3 className="dashboard-title">Volume vs Service Level</h3>
      <div className="mt-5 flex h-[150px] items-end justify-center gap-5 sm:gap-7 xl:h-[132px]">
        {bars.map((height, index) => (
          <div key={index} className="flex h-full w-2 flex-col justify-end overflow-hidden rounded-sm bg-[#00E096]">
            <div className="w-full bg-[#0095FF]" style={{ height: `${height}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-8 text-center">
        <Metric color="#0095FF" label="Volume" value="1,135" />
        <Metric color="#00E096" label="Services" value="635" />
      </div>
    </div>
  );
};

const Metric = ({ color, label, value }) => (
  <div className="flex items-start gap-2">
    <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
    <span>
      <span className="block text-[10px] font-semibold text-[#A0A7BE]">{label}</span>
      <span className="block text-[9px] font-bold text-[#15134F]">{value}</span>
    </span>
  </div>
);
