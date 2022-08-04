import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  padding: 10px;
  justify-content: center;
`;

export const Item = styled.View``;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  align-self: center;
  width: 90%;
  elevation: 6;
  margin-bottom: 20px;
`;
export const CardImage = styled.Image`
  width: 80%;
  height: 150px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: center;
`;
export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  align-self: center;
`;
export const CardDescription = styled.Text`
  background-color: #0c3a56;
  color: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  letter-spacing: 2px;
`;
