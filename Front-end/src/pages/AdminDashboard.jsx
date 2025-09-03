import React from 'react';
import { useAuth } from '../context/authContext.jsx'
import NavBar from '../components/dashboard/NavBar.jsx'
import AdminSidebar from '../components/dashboard/AdminSideBard.jsx'
import { Outlet } from 'react-router-dom';


const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <AdminSidebar />
      </div>
      <div className="dashboard-main">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;