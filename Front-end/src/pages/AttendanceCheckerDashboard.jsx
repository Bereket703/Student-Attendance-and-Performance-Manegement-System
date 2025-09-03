import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const AttendanceCheckerDashboard = () => {
    
    const {user, loading} = useAuth();
    const navigate = useNavigate()

    if(loading){
      return <div>Looading.....</div>
    }
    if(!user){
      navigate('/login')
    }
  return (
    <div>AttendanceCheckerDashboard{user && user.name}</div>
  )
}

export default AttendanceCheckerDashboard