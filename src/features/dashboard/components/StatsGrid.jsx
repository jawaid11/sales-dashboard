import { FiBarChart2, FiFileText, FiTag, FiUsers, FiUpload } from 'react-icons/fi';

const StatsGrid = () => {
  const stats = [
    { 
      title: 'Total Sales', 
      value: '$1k', 
      change: '+8%', 
      icon: FiBarChart2,
      bgColor: 'bg-rose-500',
      cardBg: 'bg-[#FFE2E6]',
      changeColor: 'text-[#3E8BFF]'
    },
    { 
      title: 'Total Order', 
      value: '300', 
      change: '+5%', 
      icon: FiFileText,
      bgColor: 'bg-orange-400',
      cardBg: 'bg-[#FFF4DE]',
      changeColor: 'text-[#3E8BFF]'
    },
    { 
      title: 'Product Sold', 
      value: '5', 
      change: '+1,2%',
      icon: FiTag,
      bgColor: 'bg-green-500',
      cardBg: 'bg-[#DCFCE7]',
      changeColor: 'text-[#3E8BFF]'
    },
    { 
      title: 'New Customers', 
      value: '8', 
      change: '0,5%',
      icon: FiUsers, 
      bgColor: 'bg-purple-400',
      cardBg: 'bg-[#F3E8FF]',
      changeColor: 'text-[#3E8BFF]'
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(149,157,165,0.10)] xl:h-[250px]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[15px] leading-5 font-bold text-[#15134F]">Today&apos;s Sales</h2>
          <p className="mt-2 text-[11px] leading-3 text-[#8B8FA7]">Sales Summary</p>
        </div>
        <button className="flex items-center gap-2 rounded-md border border-[#DDE4EF] bg-white px-3 py-2 text-[10px] font-semibold text-[#41556D] shadow-sm transition-colors hover:bg-slate-50">
          <FiUpload size={11} />
          Export
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
        {stats.map((stat) => (
          <div 
            key={stat.title} 
            className={`${stat.cardBg} min-h-[140px] rounded-xl px-4 py-4`}
          >
            <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-full ${stat.bgColor}`}>
              <stat.icon className="text-white" size={15} />
            </div>
            <p className="text-[18px] leading-5 font-bold text-[#15134F]">{stat.value}</p>
            <p className="mt-2 text-[11px] leading-3 font-medium text-[#425166]">{stat.title}</p>
            <div className="mt-2">
              <span className={`text-[9px] font-semibold ${stat.changeColor}`}>
                {stat.change}
              </span>
              <span className="ml-1 text-[9px] font-semibold text-[#3E8BFF]">from yesterday</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
