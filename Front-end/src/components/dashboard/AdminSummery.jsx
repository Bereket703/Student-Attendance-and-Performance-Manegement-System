import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaClipboardList } from "react-icons/fa";
import SummeryCard from "../dashboard/SummeryCard.jsx";


const AdminSummary = () => {
  

  return (
    <div className="summary-container">
      <h2>Dashboard Overview</h2>
      <div className="summary-cards">
        <SummeryCard
          icon={<FaUserGraduate />}
          text="Total Students"
          number='1234'
          color="green"
         
        />
         <SummeryCard
          icon={<FaChalkboardTeacher />}
          text="Total Teachers"
          number="35"
          color="yellow"
        />
        <SummeryCard
          icon={<FaBook />}
          text="15"
          color="red"
          
        />
        <SummeryCard
          icon={<FaClipboardList />}
          text="Attendance Records"
   
        />
       
      </div>
    </div>
  );
};

export default AdminSummary;
