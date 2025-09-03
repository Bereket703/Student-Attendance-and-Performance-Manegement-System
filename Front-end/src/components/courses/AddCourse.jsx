import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({
    course_name: "",
    description: ""
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        "http://localhost:4000/api/course/add",
        course,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      if (response.data.success) {
        navigate("/admin-dashboard/course");
      }
    } catch (error) {
      if (error.response && error.response.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="add-course-container">
      <h3>Add Course</h3>

      <form className="add-course-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="course_name">Course Name</label>
          <input
            type="text"
            name="course_name"
            placeholder="Enter Course Name"
            value={course.course_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Write your Description"
            value={course.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            Add
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/admin-dashboard/course")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
