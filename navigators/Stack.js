import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Write from "../screens/Write";
import Read from "../screens/Read";
const NavStack = createNativeStackNavigator();

const Stacks = () => (
  <NavStack.Navigator>
    <NavStack.Screen name="Write" component={Write} />
    <NavStack.Screen name="Read" component={Read} />
  </NavStack.Navigator>
);

export default Stacks;
