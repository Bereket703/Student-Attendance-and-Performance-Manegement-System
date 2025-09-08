import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const API_URL = "http://<your-server-ip>:4000/api";

export default function ScanQRCodeScreen() {
  const { user } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);

    try {
      const payload = JSON.parse(data); // teacherId, courseId, timestamp
      await axios.post(`${API_URL}/attendance/mark`, {
        studentId: user._id,
        teacherId: payload.teacherId,
        courseId: payload.courseId,
        timestamp: payload.timestamp,
      });

      Alert.alert("Attendance marked ✅", `Course: ${payload.courseId}`);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to mark attendance");
    }
  };

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}
