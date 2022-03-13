import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import { useDB } from "../DB/context";
import colors from "../Theme/color";

const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = ({ navigation: { goBack } }) => {
  const [selectEmotion, setEmotion] = useState("");
  const [feeling, setFeeling] = useState("");

  // contextAPI를 사용하는 방법 (useContext를 이용해서 state값을 가져옴)
  const realm = useDB();

  // console.log(selectEmotion, feeling);
  const onSubmit = () => {
    if (feeling === "" || selectEmotion === "") {
      return Alert.alert("기분을 입력해주세요");
    }
    realm.write(() => {
      const test = realm.create("Feeling", {
        _id: Date.now(),
        emotion: selectEmotion,
        message: feeling,
      });
      console.log(test);
    });
    setEmotion("");
    setFeeling("");
    goBack(); //!이전화면으로 돌아가기
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
      <TextBox>
        {selectEmotion ? <SelectEmotion>{selectEmotion}</SelectEmotion> : null}
        <TextInput
          placeholder="당신의 기분을 써주세요"
          value={feeling}
          onChangeText={(text) => setFeeling(text)}
        />
      </TextBox>
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

const TextBox = styled.View`
  position: relative;
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

interface EmotionProps {
  selected: boolean;
}

const Emotion = styled.TouchableOpacity<EmotionProps>`
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
const SelectEmotion = styled(EmotionText)`
  position: absolute;
  right: 10;
  top: 10;
  z-index: 1;
`;
