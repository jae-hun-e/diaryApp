import React from "react";
import styled from "styled-components/native";
import colors from "../Theme/color";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Title> 내 일기장</Title>
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
  font-size: 38px;
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
