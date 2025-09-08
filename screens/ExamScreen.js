import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const API_URL = "http://localhost:4000/api";

export default function ExamScreen() {
  const { user } = useContext(AuthContext);
  const [exams, setExams] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get(`${API_URL}/student/${user._id}/exams`);
        setExams(res.data.exams);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 Exam Results</Text>
      {exams ? (
        <View style={styles.examBox}>
          <Text style={styles.examHeader}>Round 1</Text>
          <Text>Written: {exams.round1?.written ?? "N/A"}</Text>
          <Text>Practical: {exams.round1?.practical ?? "N/A"}</Text>

          <Text style={styles.examHeader}>Round 2</Text>
          <Text>Written: {exams.round2?.written ?? "N/A"}</Text>
          <Text>Practical: {exams.round2?.practical ?? "N/A"}</Text>
        </View>
      ) : (
        <Text>No exam data found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  examBox: { padding: 15, backgroundColor: "#f9f9f9", borderRadius: 8 },
  examHeader: { fontWeight: "bold", marginTop: 10 },
});
