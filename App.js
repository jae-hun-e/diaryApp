import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigators/Root";
import Realm from "realm";
import AppLoading from "expo-app-loading";
import { FeelingSchema } from "./schema/writeSchema";

export default function App() {
  const [ready, setReady] = useState(false);

  const startAsync = async () => {
    const realm = await Realm.open({
      path: "myDiaryDB",
      schema: [FeelingSchema],
    });
    console.log(realm);
  };
  const onFinish = () => {
    setReady(true);
  };

  if (!ready) {
    return (
      <AppLoading startAsync={startAsync} onFinish={onFinish} onError={console.warn} />
    );
  }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
