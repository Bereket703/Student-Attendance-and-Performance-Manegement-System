import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component'
import { columns, CourseButtons } from "../../utils/CourseHelper";
import axios from 'axios'

const CourseList = () => {

  const [course,setCourse] = useState([])
  const [courseLoading,setCourseLoading] = useState(false);
  const [filteredCourse,setFilteredCourse] = useState([]);

  const onCourseDelete = async (id)=>{
    const data = await course.filter(cour => cour._id !== id)
     setCourse(data)
  }

  useEffect(()=>{
    setCourseLoading(true)
    const fetcCourse = async () =>{
      try {
        const response = await axios.get('http://localhost:4000/api/course',{
          headers: {
            "Authorization" : `Barear ${localStorage.getItem('token')}`
          }
        })
        if(response,data.success){
          let sno = 1;
          const data = await response.data.course.map((cours) =>(
            {
              _id:cours._id,
              sno:sno++,
              course_name:cours.course_name,
              action:(<CourseButtons _id={course._id} onCourseDelete={onCourseDelete}  />)
            }
          ))
           setCourse(data)
           setFilteredCourse(data)
        }
      } catch(error){
          if (error.response && error.response.data?.error) {
          alert(error.response.data.error);
      }

      } finally{
        setCourseLoading(false)
      }
    }
    fetcCourse();
  },[])
 
  const filterCourse = (e) =>{
    const records = course.filter((cour) =>cour
    .course_name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredCourse(records)
  }
 
  return (
     <>{courseLoading ? <div>Loading ....--</div>:
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
          onChange={filterCourse}
        />
      </div>
      <div className="data-table-container">
           <DataTable
              columns={columns}
              data={filteredCourse}
              pagination
              highlightOnHover
  />
</div>
    </div>
}
  </>
  );
};

export default CourseList;
