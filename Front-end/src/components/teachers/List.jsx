
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component'
import axios from 'axios'


const List = () => {
    const [teacher,setTeacher] = useState([])
      const [teacherLoading,setTeacherLoading] = useState(false);
      const [filteredCourse,setFilteredTeacher] = useState([]);
      
  return (
    <div>
     <div className="course-container">
      <div className="course-header">
        <h3>Manage Teachers</h3>
        <Link to="/admin-dashboard/add-teacher" className="add-course-btn">
          Add New Teacher
        </Link>
       </div>
      </div>
      <div className="course-search">
        <input
          type="text"
          placeholder="Search by teacher name"
       
        />
      </div>
      <div className="data-table-container">
           <DataTable
              
              
              pagination
              highlightOnHover
  />
</div>
      
    </div>
  )
}

export default List