import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigators/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
