import { Header, Sidebar } from '../../../shared/layout';
import { UserTable } from '../../users';
import {
  RevenueChart,
  StatsGrid,
  TopProducts,
  VisitorInsights,
  CustomerSatisfaction,
  SalesMap,
  TargetReality,
  VolumeService,
} from '../components';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      <div className="flex min-h-screen flex-col bg-[#F8F9FD] lg:flex-row">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <main className="px-4 pb-6 pt-4 sm:px-6 sm:pt-6">
            <div className="grid max-w-[1260px] grid-cols-1 gap-5 md:grid-cols-6 xl:grid-cols-12">
              <div className="md:col-span-6 xl:col-span-7">
                <StatsGrid />
              </div>
              <div className="md:col-span-6 xl:col-span-5">
                <VisitorInsights />
              </div>

              <div className="md:col-span-6 xl:col-span-5">
                <RevenueChart />
              </div>
              <div className="md:col-span-3 xl:col-span-3">
                <CustomerSatisfaction />
              </div>
              <div className="md:col-span-3 xl:col-span-4">
                <TargetReality />
              </div>

              <div className="md:col-span-6 xl:col-span-5">
                <TopProducts />
              </div>
              <div className="md:col-span-3 xl:col-span-3">
                <SalesMap />
              </div>
              <div className="md:col-span-3 xl:col-span-4">
                <VolumeService />
              </div>

              <div className="md:col-span-6 xl:col-span-12">
                <UserTable />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
