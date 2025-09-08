import React, { useState, useContext } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const API_URL = "http://localhost:4000/api";

export default function MessageScreen() {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message) return Alert.alert("Error", "Please enter a message");

    try {
      await axios.post(`${API_URL}/messages`, {
        studentId: user._id,
        content: message,
      });
      Alert.alert("Success", "Message sent!");
      setMessage("");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to send message");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        multiline
      />
      <Button title="Send Message" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    height: 100,
    textAlignVertical: "top",
  },
});
