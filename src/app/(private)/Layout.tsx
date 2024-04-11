import { HeaderBar } from "@/components/global/header";
import { Sidebar } from "@/components/global/sidebar";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#f5f6fa] flex-col lg:flex-row w-full">
      <Sidebar />
      <HeaderBar />
      {children}
    </div>
  );
};

export default MainLayout;
