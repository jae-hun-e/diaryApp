import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Write from "../screens/Write";
import Read from "../screens/Read";
import colors from "../Theme/color";
const NavStack = createNativeStackNavigator();

const Stacks = () => (
  <NavStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: `${colors.bgColor}` },
      headerTitleAlign: "center",
    }}
  >
    <NavStack.Screen name="오늘의 일기" component={Write} />
    <NavStack.Screen name="Read" component={Read} />
  </NavStack.Navigator>
);

export default Stacks;
