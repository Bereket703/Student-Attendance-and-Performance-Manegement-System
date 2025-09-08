import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExamScreen from "../screens/ExamScreen";
import ScanQRCodeScreen from "../screens/ScanORCodeScreen";
import MessageScreen from "../screens/MessageScreen";

const Tab = createBottomTabNavigator();

export default function StudentDashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Exams" component={ExamScreen} />
      <Tab.Screen name="Scan QR" component={ScanQRCodeScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
}
