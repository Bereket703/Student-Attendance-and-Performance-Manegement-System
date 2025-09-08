import React, { useEffect, useState, useContext } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext.js";

const API_URL = "http://localhost:4000/api";

export default function PerformanceScreen() {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(`${API_URL}/teacher/${user._id}/students`);
      setStudents(res.data.students);
    };
    fetchStudents();
  }, []);

  const saveMarks = async (studentId, round) => {
    const studentMarks = marks[studentId] || {};
    await axios.post(`${API_URL}/exam/register`, {
      studentId,
      teacherId: user._id,
      round,
      written: Number(studentMarks[`written${round}`] || 0),
      practical: Number(studentMarks[`practical${round}`] || 0),
    });
    alert(`Round ${round} marks saved!`);
  };

  const handleInput = (studentId, field, value) => {
    setMarks((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value,
      },
    }));
  };

  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ padding: 15, borderBottomWidth: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.fullName}</Text>

          {/* Round 1 */}
          <Text>Round 1 Written</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(val) => handleInput(item._id, "written1", val)}
            style={{ borderWidth: 1, marginVertical: 5 }}
          />
          <Text>Round 1 Practical</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(val) => handleInput(item._id, "practical1", val)}
            style={{ borderWidth: 1, marginVertical: 5 }}
          />
          <Button title="Save Round 1" onPress={() => saveMarks(item._id, 1)} />

          {/* Round 2 */}
          <Text style={{ marginTop: 10 }}>Round 2 Written</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(val) => handleInput(item._id, "written2", val)}
            style={{ borderWidth: 1, marginVertical: 5 }}
          />
          <Text>Round 2 Practical</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(val) => handleInput(item._id, "practical2", val)}
            style={{ borderWidth: 1, marginVertical: 5 }}
          />
          <Button title="Save Round 2" onPress={() => saveMarks(item._id, 2)} />
        </View>
      )}
    />
  );
}
