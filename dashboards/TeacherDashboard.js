import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AttendanceScreen from "../screens/AttendanceTracker";
import PerformanceScreen from "../screens/PerformanceScreen";
import QRGenerator from "../screens/GenerateQRCodeScreen"

const Tab = createBottomTabNavigator();

export default function TeacherDashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Performance" component={PerformanceScreen} />
      <Tab.Screen name="QR" component={QRGenerator} />
    </Tab.Navigator>
  );
}
