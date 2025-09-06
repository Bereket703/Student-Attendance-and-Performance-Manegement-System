import axios from "axios";

const API_URL = "http://localhost:4000/api/teacher";

// Add new teacher
export const fetchCourse = async () => {
  let courses 

  try {
    const response = await axios.get(`${API_URL}`,  {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (response.data.success){
        courses = response.data.courses
    }
  } catch (error) {
    if(error.response && !error,response,data.success) {
        alert(error.response.data.error)
    }
  }
  return courses
};

