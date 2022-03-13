import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import colors from "../Theme/color";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
} from "react-native";
import { useDB } from "../DB/context";

const Home = ({ navigation: { navigate } }) => {
  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const realm = useDB();
  const [feelings, setFeelings] = useState([]);
  console.log(feelings);

  useEffect(() => {
    const feeling = realm.objects("Feeling");
    feeling.addListener((feeling) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setFeelings(feeling.sorted("_id", true));
    });
    return () => {
      feeling.removeAllListeners();
    };
  }, []);

  const onPress = (id) => {
    realm.write(() => {
      const feeling = realm.objectForPrimaryKey("Feeling", id);
      realm.delete(feeling);
    });
  };
  return (
    <View>
      <Title> 내 일기장</Title>
      <FlatList
        data={feelings}
        keyExtractor={(feeling) => feeling._id + ""}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item._id)}>
            <Record>
              <Emotion>{item.emotion}</Emotion>
              <Message>{item.message}</Message>
            </Record>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Vseparator}
      ></FlatList>
      <Btn onPress={() => navigate("Stacks", { screen: "Write" })}>
        <Ionicons name="add" color="white" size={40} />
      </Btn>
      <TouchableOpacity onPress={() => navigate("Stacks", { screen: "Read" })}>
        <BtnText>Read</BtnText>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const View = styled.View`
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
  background-color: ${colors.bgColor};
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: 40px;
  height: 60px;
  width: 60px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  elevation: 5; //! 안드로이드 그림자
`;

const BtnText = styled.Text``;

const Record = styled.View`
  background-color: ${colors.cardColor};
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Emotion = styled.Text`
  font-size: 20px;
  margin-right: 15px;
`;
const Message = styled.Text`
  font-size: 20px;
`;

const Vseparator = styled.View`
  height: 10px;
`;
