import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsersCog,
  FaClipboardList,
  FaBook,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";


const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="top-header">
       <h3>XStudent Attendance and Performance</h3>
     </div>


      <NavLink to="/admin-dashboard" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaTachometerAlt /><span>Admin Dashboard</span>
      </NavLink>

      <NavLink to="/admin-dashboard/users" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaUsersCog /><span>Manage Users</span>
      </NavLink>

      <NavLink to="/admin-dashboard/students" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaUserGraduate /><span>Manage Students</span>
      </NavLink>

      <NavLink to="/admin-dashboard/teachers" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaChalkboardTeacher /><span>Manage Teachers</span>
      </NavLink>

      <NavLink to="/admin-dashboard/course" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaBook /><span>Manage Courses</span>
      </NavLink>

      <NavLink to="/admin-dashboard/attendance" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaClipboardList /><span>Manage Attendance</span>
      </NavLink>

      <NavLink to="/admin-dashboard/reports" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaChartBar /><span>Reports</span>
      </NavLink>

      <NavLink to="/admin-dashboard/settings" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
        <FaCog /><span>Settings</span>
      </NavLink>

      <div className="logout">
        <FaSignOutAlt /><span>Logout</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
