import { useNavigate } from "react-router-dom"
import axios from "axios"

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno

    },
      {
        name: "Course Name",
        selector: (row) => row.course_name,
        sortable:true
    },
     {
        name: "Action",
        selector: (row) => row.action
    },
    
]
export const CourseButtons = ({_id , onCourseDelete})=>{
    const navigate = useNavigate()
    const handelDelete = async (Id)=>{
      const confirm = window.confirm("Do you want delete?")
      if(confirm){
      try {
        
        const response = await axios.delete(`http://localhost:4000/api/course${id}`,{
          headers: {
            "Authorization" : `Barear ${localStorage.getItem('token')}`
          }
        })
        if(response,data.success){
          onCourseDelete(id)
          
        }
      } catch(error){
          if (error.response && error.response.data?.error) {
          alert(error.response.data.error);
      }

      }       
     }
    };

    return(
        <div>
  <button class="btn-edit"
  onClick={()=>navigate(`/admin-dashboard/course/${_id}`)}
  >EDIT</button>
  <button class="btn-delete"
  onClick={()=>handelDelete(Id)}
  >DELETE</button>
      </div>
    )

}