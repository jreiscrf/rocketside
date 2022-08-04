import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin-top: 1px;
  border-bottom-width: 1px;
  padding-bottom: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholder: "",
  keyboardtype: "email-adress",
})`
  flex: 1;
  padding: 8px;
`;

export const Label = styled.Text`
  color: #c1c1c1;
`;
