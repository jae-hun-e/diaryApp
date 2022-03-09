import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import colors from "../Theme/color";

interface WriteProps {}

const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = () => {
  const [selectEmotion, setEmotion] = useState("");
  const [feeling, setFeeling] = useState("");

  console.log(selectEmotion, feeling);
  const onSubmit = () => {
    if (feeling === "" || selectEmotion === "") {
      return Alert.alert("기분을 입력해주세요");
    }
  };
  return (
    <View>
      <Title>Write</Title>
      <Emotions>
        {emotions.map((emot, idx) => (
          <Emotion
            key={idx}
            onPress={() => setEmotion(emot)}
            selected={emot === selectEmotion}
          >
            <EmotionText>{emot}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        placeholder="당신의 기분을 써주세요"
        value={feeling}
        onChangeText={(text) => setFeeling(text)}
      />
      <Btn onPress={onSubmit}>
        <BtnText>save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;

const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Emotion = styled.TouchableOpacity`
  background-color: white;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
  padding: 5px;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${(props) => (props.selected ? "rgba(41, 30, 95, 1);" : "transparent")};
`;
const EmotionText = styled.Text`
  font-size: 20px;
`;
