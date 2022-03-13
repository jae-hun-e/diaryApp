import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigators/Root";
import Realm from "realm";
import AppLoading from "expo-app-loading";
import { FeelingSchema } from "./schema/writeSchema";
import { DBContext } from "./DB/context";
import { setTestDeviceIDAsync } from "expo-ads-admob";

// contextAPI를 이용해서 전역상태로 만들어줌

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null);

  const startAsync = async () => {
    await setTestDeviceIDAsync("EMULATOR");
    const connection = await Realm.open({
      path: "myDiaryDB",
      schema: [FeelingSchema],
    });
    //  console.log(realm);
    setRealm(connection);
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
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </DBContext.Provider>
  );
}
