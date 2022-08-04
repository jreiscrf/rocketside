import React from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import Header from "../../components/Header";
import useModalWebView from "./useModalWebView";
import * as S from "./styles";

const Button = () => {
  const { handlePress, goBack, rocket, useModal, currentLink } =
    useModalWebView();

  return (
    <>
      <S.Modal visible={useModal} animationType="slide" transparent={true}>
        <Header onPress={goBack} type="hocketPage" />
        <WebView source={{ uri: currentLink }} />
      </S.Modal>

      <S.Container>
        <S.Touchable onPress={() => handlePress(rocket.links.webcast)}>
          <MaterialCommunityIcons name="youtube" size={45} color="#0c3a56" />
        </S.Touchable>
        <S.Touchable onPress={() => handlePress(rocket.links.wikipedia)}>
          <MaterialCommunityIcons name="wikipedia" size={41} color="#0c3a56" />
        </S.Touchable>
        <S.Touchable onPress={() => handlePress(rocket.links.article)}>
          <Fontisto name="world-o" size={29} color="#0c3a56" />
        </S.Touchable>
      </S.Container>
    </>
  );
};

export default Button;
