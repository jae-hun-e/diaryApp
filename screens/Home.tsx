import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import colors from "../Theme/color";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native";
import { useDB } from "../DB/context";

const Home = ({ navigation: { navigate } }) => {
  const realm = useDB();
  const [feelings, setFeelings] = useState(realm.objects("Feeling"));
  console.log(feelings);

  useEffect(() => {
    const feeling = realm.objects("Feeling");
    // console.log(feeling);
    // query문 작성하기
    const lovely = feeling.filtered("emotion ='🥰' ");
    // console.log(lovely);
  }, []);
  return (
    <View>
      <Title> 내 일기장</Title>
      <FlatList
        data={feelings}
        keyExtractor={(feeling) => feeling._id + ""}
        renderItem={({ item }) => (
          <Record>
            <Emotion>{item.emotion}</Emotion>
            <Message>{item.message}</Message>
          </Record>
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
  justify-content: center;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Emotion = styled.Text`
  font-size: 20px;
`;
const Message = styled.Text`
  font-size: 20px;
`;

const Vseparator = styled.View`
  height: 10px;
`;
