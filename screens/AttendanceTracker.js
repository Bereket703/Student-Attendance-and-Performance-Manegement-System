import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const API_URL = "http://localhost:4000/api";

export default function AttendanceScreen() {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get(`${API_URL}/teacher/${user._id}/courses`);
      setCourses(res.data.courses);
    };
    fetchCourses();
  }, []);

  const fetchStudents = async (courseId) => {
    const res = await axios.get(`${API_URL}/course/${courseId}/students`);
    setStudents(res.data.students);
    setSelectedCourse(courseId);
  };

  const markAttendance = async (studentId, status) => {
    await axios.post(`${API_URL}/attendance/mark`, {
      studentId,
      courseId: selectedCourse,
      teacherId: user._id,
      status,
    });
    alert("Attendance Saved!");
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Select Course</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => fetchStudents(item._id)}>
            <Text style={{ padding: 10, backgroundColor: "lightgray", marginVertical: 5 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {students.length > 0 && (
        <>
          <Text style={{ fontSize: 18, marginTop: 20 }}>Mark Attendance</Text>
          <FlatList
            data={students}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 5 }}>
                <Text>{item.fullName}</Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => markAttendance(item._id, "Present")}>
                    <Text style={{ color: "green", marginRight: 10 }}>Present</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => markAttendance(item._id, "Absent")}>
                    <Text style={{ color: "red" }}>Absent</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}
