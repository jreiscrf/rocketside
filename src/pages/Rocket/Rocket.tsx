import React, { useEffect } from "react";
import { FlatList, Modal } from "react-native";
import Header from "../../components/Header";
import InfoRocket from "../../components/InfoRocket";
import ModalWebView from "../../components/ModalWebView";
import useRocket from "./useRocket";
import { useSelector } from "react-redux";
import * as S from "./styles";

const Rocket = () => {
  const rocket = useSelector((state) => state.rockets.currentRocket);
  const { goBack } = useRocket();

  return (
    <S.Container>
      <Header onPress={goBack} type="hocketPage" />
      <S.ViewTitle>
        <S.Title>{rocket.name}</S.Title>
      </S.ViewTitle>
      <S.ViewCarrousel>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={rocket.links.flickr.original}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <S.Image source={{ uri: item }} />;
          }}
        />
      </S.ViewCarrousel>
      <InfoRocket />
      <ModalWebView />
    </S.Container>
  );
};

export default Rocket;
