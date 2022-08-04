import React from "react";
import { FlatList } from "react-native";
import { setFilter } from "../../stores/rockets";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import useHome from "../Home/useHome";
import * as S from "./styles";

const Home = () => {
  const { filtered, dispatch, navigateToLogin } = useHome();
  return (
    <S.Container>
      <Header onPress={navigateToLogin} />
      <S.SearchInput
        onChangeText={(e) => {
          dispatch(setFilter(e));
        }}
      />
      <Pagination />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </S.Container>
  );
};

export default Home;
