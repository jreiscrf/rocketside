import styled from "styled-components/native";

export const Container = styled.ImageBackground.attrs({
  source: require("../../assets/banner-galaxia.jpg"),
  resizeMode: "cover",
})`
  flex: 1;
  justify-content: center;
`;

export const ViewBanner = styled.View`
  height: 50%;
  width: 100%;
`;
export const Banner = styled.Image.attrs({
  source: require("../../assets/banner-galaxia.jpg"),
})`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Content = styled.View`
  background-color: white;
  padding: 20px;
  width: 90%;
  align-self: center;
  border-radius: 20px;
`;

export const ViewText = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const ViewInputEmail = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

export const ViewInputSenha = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #0274bc;
`;

export const TextTwo = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  color: #3c3c3c;
`;

export const ViewButton = styled.View`
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const ViewSignUp = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextQuestSignUp = styled.Text`
  align-self: center;
  font-size: 18px;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const TextSignUp = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #0c3a56;
  margin-left: 5px;
  font-size: 18px;
`;

export const Forget = styled.View``;

export const TextForget = styled.Text`
  color: #0c3a56;
  font-weight: 700;
  font-size: 12px;
  align-self: flex-end;
  padding: 10px;
  margin-right: 8px;
`;
