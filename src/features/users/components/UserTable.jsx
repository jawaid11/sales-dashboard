import { useEffect, useMemo, useState } from 'react';
import {
  FiArrowDown,
  FiArrowUp,
  FiChevronDown,
  FiFilter,
  FiRefreshCw,
  FiSearch,
  FiUsers,
} from 'react-icons/fi';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCity, setSelectedCity] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(USERS_API);

      if (!response.ok) {
        throw new Error('Unable to load users right now.');
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Unable to load users right now.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const cities = useMemo(() => {
    const cityList = users.map((user) => user.address?.city || 'Unknown');
    return [...new Set(cityList)].sort((a, b) => a.localeCompare(b));
  }, [users]);

  const filteredAndSortedUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return users
      .filter((user) => {
        const matchesSearch =
          !term ||
          user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term);
        const matchesCity = !selectedCity || (user.address?.city || 'Unknown') === selectedCity;

        return matchesSearch && matchesCity;
      })
      .sort((a, b) => {
        const result = a.name.localeCompare(b.name);
        return sortDirection === 'asc' ? result : -result;
      });
  }, [users, searchTerm, selectedCity, sortDirection]);

  const toggleSort = () => {
    setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <section className="dashboard-card overflow-hidden">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#5D5FEF]">
            <FiUsers size={18} />
          </div>
          <div>
            <h3 className="dashboard-title">User Management</h3>
            <p className="mt-1 text-[11px] font-medium text-[#8B8FA7]">
              Search, filter, and sort public API users
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative sm:w-[300px]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF]" size={16} />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search name or email..."
              className="h-11 w-full rounded-xl border border-transparent bg-[#F8F8FF] pl-11 pr-4 text-[12px] font-semibold text-[#15134F] outline-none transition focus:border-[#C7D2FE] placeholder:text-[#A0A7BE]"
            />
          </div>

          <div className="relative sm:w-[190px]">
            <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5D5FEF]" size={15} />
            <select
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
              className="h-11 w-full appearance-none rounded-xl border border-transparent bg-[#F8F8FF] pl-11 pr-9 text-[12px] font-semibold text-[#15134F] outline-none transition focus:border-[#C7D2FE]"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A7BE]" size={14} />
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex h-[220px] items-center justify-center rounded-xl bg-[#FBFCFF] text-[12px] font-bold text-[#737791]">
          <span className="mr-3 h-7 w-7 animate-spin rounded-full border-2 border-[#E0E7FF] border-t-[#5D5FEF]" />
          Loading users...
        </div>
      )}

      {!loading && error && (
        <div className="flex h-[220px] flex-col items-center justify-center rounded-xl bg-[#FFF7F7] text-center">
          <p className="text-[13px] font-bold text-[#EF4444]">{error}</p>
          <button
            type="button"
            onClick={fetchUsers}
            className="mt-4 flex h-10 items-center gap-2 rounded-lg bg-[#5D5FEF] px-4 text-[12px] font-bold text-white shadow-[0_10px_20px_rgba(93,95,239,0.20)]"
          >
            <FiRefreshCw size={14} />
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="overflow-hidden rounded-xl border border-[#EDF0F7]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] table-fixed">
                <thead className="bg-[#FBFCFF]">
                  <tr className="text-left text-[11px] font-bold text-[#A0A7BE]">
                    <th className="w-[26%] px-5 py-4">
                      <button
                        type="button"
                        onClick={toggleSort}
                        className="flex items-center gap-2 text-[#15134F] transition hover:text-[#5D5FEF]"
                      >
                        Name
                        {sortDirection === 'asc' ? <FiArrowUp size={13} /> : <FiArrowDown size={13} />}
                      </button>
                    </th>
                    <th className="w-[30%] px-5 py-4">Email</th>
                    <th className="w-[27%] px-5 py-4">Company Name</th>
                    <th className="w-[17%] px-5 py-4">City</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedUsers.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-5 py-12 text-center text-[12px] font-semibold text-[#8B8FA7]">
                        No users found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    filteredAndSortedUsers.map((user) => (
                      <tr key={user.id} className="border-t border-[#EDF0F7] transition hover:bg-[#FBFCFF]">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[12px] font-bold text-[#5D5FEF]">
                              {user.name
                                .split(' ')
                                .map((part) => part[0])
                                .join('')
                                .slice(0, 2)}
                            </span>
                            <span className="truncate text-[12px] font-bold text-[#15134F]">{user.name}</span>
                          </div>
                        </td>
                        <td className="truncate px-5 py-4 text-[12px] font-semibold text-[#737791]">{user.email}</td>
                        <td className="truncate px-5 py-4 text-[12px] font-semibold text-[#737791]">
                          {user.company?.name || 'N/A'}
                        </td>
                        <td className="px-5 py-4">
                          <span className="rounded-lg bg-[#F3E8FF] px-3 py-1.5 text-[11px] font-bold text-[#884DFF]">
                            {user.address?.city || 'Unknown'}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-[#8B8FA7]">
            <span>
              Showing {filteredAndSortedUsers.length} of {users.length} users
            </span>
            <span>Name sorted {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}</span>
          </div>
        </>
      )}
    </section>
  );
};

export default UserTable;
