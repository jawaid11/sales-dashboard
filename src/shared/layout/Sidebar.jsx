import { useState } from 'react';
import { 
  FiHome, 
  FiAward, 
  FiShoppingBag, 
  FiPackage, 
  FiBarChart2, 
  FiMessageSquare, 
  FiSettings, 
  FiLogOut,
  FiRefreshCw
} from 'react-icons/fi';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  
  const menuItems = [
    { name: 'Dashboard', icon: FiHome },
    { name: 'Leaderboard', icon: FiAward },
    { name: 'Order', icon: FiShoppingBag },
    { name: 'Products', icon: FiPackage },
    { name: 'Sales Report', icon: FiBarChart2 },
    { name: 'Messages', icon: FiMessageSquare },
    { name: 'Settings', icon: FiSettings },
    { name: 'Sign Out', icon: FiLogOut },
  ];

  return (
    <aside className="flex shrink-0 flex-col bg-white lg:min-h-screen lg:w-[180px]">
      <div className="px-4 pb-4 pt-5 sm:px-6 lg:pb-7 lg:pt-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#5D5FEF] text-white shadow-[0_8px_20px_rgba(93,95,239,0.25)]">
            <FiRefreshCw size={18} />
          </div>
          <h2 className="text-[20px] font-bold text-[#15134F]">Dabang</h2>
        </div>
      </div>
      
      <nav className="flex gap-3 overflow-x-auto px-4 pb-4 sm:px-5 lg:block lg:space-y-4 lg:overflow-visible lg:pb-0">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveMenu(item.name)}
            className={`
              flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-[12px] font-semibold transition-all duration-200 lg:w-full lg:gap-4
              ${activeMenu === item.name 
                ? 'bg-[#5D5FEF] text-white shadow-[0_10px_20px_rgba(93,95,239,0.24)]' 
                : 'text-[#A0A7BE] hover:bg-indigo-50 hover:text-[#5D5FEF]'
              }
            `}
          >
            <item.icon size={17} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
      
      <div className="mx-4 mb-4 mt-2 rounded-xl bg-[#5D5FEF] px-4 pb-5 pt-7 text-center text-white shadow-[0_18px_30px_rgba(93,95,239,0.25)] sm:mx-5 lg:mb-0 lg:mt-8">
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <FiRefreshCw className="text-[#5D5FEF]" size={16} />
          </div>
        </div>
        <p className="text-[14px] font-bold">Dabang Pro</p>
        <p className="mx-auto mt-2 max-w-[105px] text-[9px] leading-3 text-white/80">Get access to all features on tetumbas</p>
        <button className="mt-4 h-8 w-[92px] rounded-md bg-white text-[11px] font-bold text-[#5D5FEF]">Get Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;
