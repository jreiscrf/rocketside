import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as S from "./styles";

type Props = {
  label: string;
  secure?: boolean;
  type?: string;
  placeholder: string;
  value: string;
  setValue: (data: string) => void;
};

const Input: React.FC<Props> = ({ label, secure, type, value, setValue }) => {
  const leftIcon = React.useMemo(() => {
    if (type == "email") {
      return <AntDesign size={30} name="user" />;
    }
    return <AntDesign size={30} name="lock" />;
  }, [type]);

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Row>
        {leftIcon}
        <S.Input
          secureTextEntry={secure}
          onChangeText={setValue}
          value={value}
        />
      </S.Row>
    </S.Container>
  );
};

export default Input;
