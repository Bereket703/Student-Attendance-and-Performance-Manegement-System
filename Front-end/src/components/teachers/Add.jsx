import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchCourse} from "../../utils/TeacherHelper.jsx"

const Add = () => {
  const [teacher, setTeacher] = useState({
    fullName: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
    password: ""
  });
  const [image, setImage] = useState(null);
  const [formData,setFormData]= useState({});
  const navigate = useNavigate();



    // Fetch courses on mount
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/course", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          setCourses(response.data.courses); // assuming backend sends { success, courses: [...] }
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("Failed to load courses");
      }
    };

    fetchCourse();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(teacher).forEach((key) => formData.append(key, teacher[key]));
    if (image) formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/teacher/add",
       formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        navigate("/admin-dashboard/teacher");
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
    <div className="add-teacher-container">
      <h3>Add Teacher</h3>

      <form className="add-teacher-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={teacher.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={teacher.email}
            onChange={handleChange}
            required
          />
        </div>
         <div className="form-group">
          <label htmlFor="course">Course</label>
          <select
            name="course"
            value={teacher.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Course --</option>
            {courses.map((c) => (
              <option key={c._id} value={c._id}>
                {c.course_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={teacher.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={teacher.dob}
            onChange={handleChange}
            required
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={teacher.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            Add a <Teacher></Teacher>
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/admin-dashboard/teacher")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
