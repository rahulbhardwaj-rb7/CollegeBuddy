import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './components/loginPage/loginPage';
import ResetPasswordPage from './components/ResetPassword/resetPasswordPage';
import SetPasswordPage from './components/setPasswordPage/setPasswordPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MainLayout from './layouts/MainLayout/mainLayout';
import DashboardLayout from './layouts/DashboardLayout/dashboardLayout';
import DashboardPage from './components/DashboardPage/dashboardPage';
import { AdminPanel } from './components/AdminPanel/adminPanel';
import { GlobalStateProvider } from './GlobalStateContext';
import { USAAdminPanel } from './components/USA_Admin_Panel/usaAdminPanel';

const App: React.FC = () => (
  <BrowserRouter>
  <div className="scrollbar" id="custome_scrollbar">
  </div>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="setPassword" element={<SetPasswordPage />} />
      </Route>
      <Route path="/inphamed" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="search-result" element={<AdminPanel />} />
        <Route path="usa-search-result" element={<USAAdminPanel/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStateProvider>
    <App />
    </GlobalStateProvider>
  </React.StrictMode>,
);
