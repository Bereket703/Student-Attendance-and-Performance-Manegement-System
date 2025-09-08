import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import TeacherDashboard from "./dashboards/TeacherDashboard";
import StudentDashboard from "./dashboards/StudentDashbord";
import { AuthProvider } from "./context/authContext";  // ✅ import provider

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
          <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
