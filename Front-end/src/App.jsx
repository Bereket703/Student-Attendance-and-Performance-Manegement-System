import {Routes,Route,Navigate, BrowserRouter} from "react-router-dom"
import Login from "./pages/Login.jsx"
import AdminDashboard from './pages/AdminDashboard.jsx'
import AttendanceCheckerDashboard from "./pages/AttendanceCheckerDashboard.jsx"
import PrivateRoutes from "./utils/PrivateRoutes.jsx"
import RoleBasedRoutes from "./utils/RoleBasedRoutes.jsx"
import AdminSummary from "./components/dashboard/AdminSummery.jsx"
import StudentList from "./components/students/StudentList.jsx"
import CourseList from "./components/courses/CourseList.jsx"
import AddCourse from "./components/courses/AddCourse.jsx"


function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

    <Route path="/admin-dashboard" element={
      <PrivateRoutes>
        <RoleBasedRoutes requiredRole={["admin"]}>
          <AdminDashboard/>
        </RoleBasedRoutes>
      </PrivateRoutes>

      }>
        <Route index element={<AdminSummary/>} ></Route>
        <Route path="/admin-dashboard/students" element={<StudentList/>} ></Route>
        <Route path="/admin-dashboard/course" element={<CourseList/>} ></Route>
        <Route path="/admin-dashboard/add-course" element={<AddCourse/>} ></Route>
      </Route>

    <Route path="/attendance-checker-dashboard" element={<AttendanceCheckerDashboard/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
