import React from "react";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as S from "./styles";

const InfoRocket = () => {
  const rocket = useSelector((state) => state.rockets.currentRocket);

  return (
    <S.View>
      <S.ViewDescription>
        <S.ViewItems>
          <MaterialCommunityIcons
            name="rocket-launch-outline"
            size={24}
            color="black"
          />
          <S.TextDescription>Flight</S.TextDescription>
          <S.TextDescription>{rocket.flight_number}</S.TextDescription>
        </S.ViewItems>
        <S.ViewItems>
          <MaterialCommunityIcons
            name="window-closed-variant"
            size={24}
            color="black"
          />
          <S.TextDescription>Window</S.TextDescription>
          <S.TextDescription>{rocket.window}</S.TextDescription>
        </S.ViewItems>

        <S.ViewItems>
          <MaterialCommunityIcons name="recycle" size={24} color="black" />
          <S.TextDescription>Reused</S.TextDescription>
          <S.TextDescription>{rocket.reused ? "Yes" : "Not"}</S.TextDescription>
        </S.ViewItems>
      </S.ViewDescription>

      <S.ViewDescription>
        <S.ViewItems>
          <MaterialCommunityIcons name="wifi-sync" size={24} color="black" />
          <S.TextDescription>Internet</S.TextDescription>
          <S.TextDescription>{rocket.net ? "Yes" : "Not"}</S.TextDescription>
        </S.ViewItems>
        <S.ViewItems>
          <MaterialCommunityIcons
            name="airplane-check"
            size={24}
            color="black"
          />
          <S.TextDescription>Success</S.TextDescription>
          <S.TextDescription>
            {rocket.success ? "Yes" : "Not"}
          </S.TextDescription>
        </S.ViewItems>

        <S.ViewItems>
          <FontAwesome name="gear" size={24} color="black" />
          <S.TextDescription>Legs</S.TextDescription>
          <S.TextDescription>
            {rocket.cores.legs ? "Yes" : "Not"}
          </S.TextDescription>
        </S.ViewItems>
      </S.ViewDescription>
    </S.View>
  );
};

export default InfoRocket;
