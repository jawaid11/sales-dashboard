import { FiSearch, FiChevronDown, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white px-4 py-5 sm:px-6 sm:py-6">
      <div className="flex max-w-[1260px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
        <h1 className="text-[24px] font-bold leading-none text-[#15134F] sm:text-[26px]">Dashboard</h1>

        <div className="relative w-full max-w-[330px] lg:w-[330px]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF]" size={17} />
          <input
            type="text"
            placeholder="Search here..."
            className="h-10 w-full rounded-lg border-0 bg-[#F8F8FF] pl-11 pr-4 text-[12px] text-[#737791] outline-none placeholder:text-[#B8BBD0]"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <button className="flex items-center gap-2 text-[12px] font-semibold text-[#374557]">
            <span className="text-[12px] font-bold">US</span>
            Eng (US)
            <FiChevronDown size={14} className="text-[#A0A7BE]" />
          </button>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF8E8]">
            <FiBell size={17} className="text-[#FFB545]" />
            <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-[#FF5A5F]"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-[#F6C184] to-[#383C7A]">
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_30%,#f5d1a6_0_14%,transparent_15%),linear-gradient(160deg,transparent_0_45%,rgba(0,0,0,0.32)_46%)]"></div>
            </div>
            <div className="hidden min-[420px]:block">
              <p className="text-[12px] font-bold leading-4 text-[#15134F]">Musfiq</p>
              <p className="text-[10px] font-medium text-[#737791]">Admin</p>
            </div>
            <FiChevronDown size={14} className="text-[#A0A7BE] hidden min-[420px]:block" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
