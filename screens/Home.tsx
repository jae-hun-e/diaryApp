import React from "react";
import styled from "styled-components/native";

const Home = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Btn onPress={() => navigate("Stacks", { screen: "Write" })}>
        <BtnText>Write</BtnText>
      </Btn>
      <Btn onPress={() => navigate("Stacks", { screen: "Read" })}>
        <BtnText>Read</BtnText>
      </Btn>
    </View>
  );
};

export default Home;

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Btn = styled.TouchableOpacity``;

const BtnText = styled.Text``;
