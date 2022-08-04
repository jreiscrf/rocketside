import React from "react";
import { useNavigation } from "@react-navigation/native";
import { setCurrentRocket } from "../../stores/rockets";
import { useDispatch } from "react-redux";
import * as S from "./styles";

type CardProps = {
  data: any;
  keyExtractor: (item: any) => string;
  onPress: () => void;
};

const Card: React.FC<CardProps> = ({ data, onPress }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleRocketPage = () => {
    dispatch(setCurrentRocket(data));
    navigate("Rocket" as never);
  };

  return (
    <S.Card onPress={handleRocketPage}>
      <S.CardTitle>{data.name}</S.CardTitle>
      <S.CardImage
        resizeMode="contain"
        source={{ uri: data.links.patch.small }}
      />
      <S.CardDescription>
        {data.details ?? "Details not available"}
      </S.CardDescription>
    </S.Card>
  );
};

export default Card;
