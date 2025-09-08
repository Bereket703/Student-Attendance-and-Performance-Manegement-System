import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { AuthContext } from "../context/authContext";

export default function LoginScreen({ navigation }) {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Login failed", "Invalid credentials");
    }
  };

  // 👇 Redirect when user changes
  useEffect(() => {
    if (user?.role === "teacher") {
      navigation.replace("TeacherDashboard");
    } else if (user?.role === "student") {
      navigation.replace("StudentDashboard");
    }
  }, [user]);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
