import { Outlet } from "react-router-dom";
import "./dashboardLayout.css"
import MainHeader from "../../components/Commom/header/header";
import MainFooter from "../../components/Commom/footer/footer";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
    <MainHeader/>
    <main>
      <Outlet />
    </main>
    <MainFooter  />
    
  </div>
  );
};

export default DashboardLayout;
