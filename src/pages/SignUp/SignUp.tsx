import React from "react";
import useSignup from "./useSignup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ScrollView } from "react-native";
import { setEmail, setPassword } from "../../stores/auth";
import * as S from "./styles";

const SignUp = () => {
  const { email, password, addUser, dispatch } = useSignup();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <S.Container>
        <S.ViewText>
          <S.TextSignUp>Crie sua conta</S.TextSignUp>
          <S.TextTwo>Preencha os campos abaixo</S.TextTwo>
        </S.ViewText>
        <S.ViewInput>
          <Input
            placeholder="email"
            label="E-Mail"
            type="email"
            value={email}
            setValue={(e) => dispatch(setEmail(e))}
          />
          <Input
            placeholder="passaword"
            label="Passaword"
            type="passaword"
            value={password}
            setValue={(e) => dispatch(setPassword(e))}
          />
        </S.ViewInput>
        <S.ViewButton>
          <Button onPress={addUser} />
        </S.ViewButton>
      </S.Container>
    </ScrollView>
  );
};

export default SignUp;
