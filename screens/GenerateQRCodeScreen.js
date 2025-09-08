import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function GenerateQRCodeScreen() {
  const [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    // Example QR payload: teacherId + courseId + timestamp
    const payload = JSON.stringify({
      teacherId: "teacher123",
      courseId: "math101",
      timestamp: Date.now()
    });
    setQrValue(payload);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Attendance QR</Text>
      <Button title="Generate QR Code" onPress={generateQR} />

      {qrValue ? (
        <View style={{ marginTop: 20 }}>
          <QRCode value={qrValue} size={200} />
          <Text style={{ marginTop: 10 }}>Show this QR code to students</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20, fontWeight: "bold" },
});
