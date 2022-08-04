import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  height: 100%;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: "Search ...",
  placeholderTextColor: "#FFF",
})`
  background-color: #0c3a56;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;
