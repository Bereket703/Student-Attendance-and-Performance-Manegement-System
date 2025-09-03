import React from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  return (
    <div className="course-container">
      <div className="course-header">
        <h3>Manage Courses</h3>
        <Link to="/admin-dashboard/add-course" className="add-course-btn">
          Add New Course
        </Link>
      </div>

      <div className="course-search">
        <input
          type="text"
          placeholder="Search by course name"
        />
      </div>

    
      <div className="course-table">
        <p>No courses available yet.</p>
      </div>
    </div>
  );
};

export default CourseList;
