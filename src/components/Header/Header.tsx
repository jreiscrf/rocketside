import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import * as S from "./styles";

type HeaderProps = {
  type?: string;
  onPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ type, onPress }) => {
  const iconGoBack = React.useMemo(() => {
    if (type == "hocketPage") {
      return <AntDesign name="left" size={26} color="white" />;
    }
    return <MaterialIcons name="logout" size={26} color="white" />;
  }, []);

  return (
    <>
      <SafeAreaView />
      <S.Container>
        <S.HeaderView>
          <S.ViewLogo>
            <S.RocketImage source={require("../../assets/rocket.png")} />
            <S.Text>RocketSide</S.Text>
          </S.ViewLogo>
          <S.Touchable onPress={onPress}>{iconGoBack}</S.Touchable>
        </S.HeaderView>
      </S.Container>
    </>
  );
};

export default Header;
