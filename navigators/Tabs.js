import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Read from "../screens/Folder";
import List from "../screens/List";
import { Ionicons } from "@expo/vector-icons";

const NavTabs = createBottomTabNavigator();

const Tabs = () => (
  <NavTabs.Navigator screenOptions={{ headerShown: false }}>
    <NavTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
      }}
    />
    <NavTabs.Screen
      name="List"
      component={List}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="pencil-outline" color={color} size={size} />,
      }}
    />
    <NavTabs.Screen
      name="Folder"
      component={Read}
      options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="reader-outline" color={color} size={size} />,
      }}
    />
  </NavTabs.Navigator>
);

export default Tabs;
