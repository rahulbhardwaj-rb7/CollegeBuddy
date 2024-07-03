import { Outlet } from "react-router-dom";
import "./dashboardLayout.css"
import MainHeader from "../../components/Commom/header/header";
import MainFooter from "../../components/Commom/footer/footer";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [showSearchBar, setShowSearchBar] = useState(true);


  const toggleSearchBar = (show: boolean) => {
    setShowSearchBar(show);
  }

  return (
    <div className="dashboard-layout">
    <MainHeader displaySearch={showSearchBar}/>
    <main>
      <Outlet context={{ showSearchBar, toggleSearchBar }}/>
    </main>
    <MainFooter  />
    
  </div>
  );
};

export default DashboardLayout;
