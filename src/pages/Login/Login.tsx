import React from "react";
import { setEmail, setPassword } from "../../stores/auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useLogin from "./useLogin";
import * as S from "./styles";

const Login = () => {
  const { email, password, navigateToHomeScreen, handleSignUp, dispatch } =
    useLogin();

  return (
    <S.Container>
      <S.Content>
        <S.ViewInputEmail>
          <Input
            placeholder="email"
            label="E-mail"
            type="email"
            value={email}
            setValue={(e) => dispatch(setEmail(e))}
          />
        </S.ViewInputEmail>
        <S.ViewInputSenha>
          <Input
            placeholder="senha"
            label="Passaword"
            secure
            type="senha"
            value={password}
            setValue={(e) => dispatch(setPassword(e))}
          />
        </S.ViewInputSenha>
        <S.Forget>
          <S.TextForget>forget?</S.TextForget>
        </S.Forget>
        <S.ViewButton>
          <Button onPress={navigateToHomeScreen} />
        </S.ViewButton>
        <S.ViewSignUp>
          <S.TextQuestSignUp>Don't have an account?</S.TextQuestSignUp>
          <S.ButtonSignUp onPress={handleSignUp}>
            <S.TextSignUp>Sign Up</S.TextSignUp>
          </S.ButtonSignUp>
        </S.ViewSignUp>
      </S.Content>
    </S.Container>
  );
};

export default Login;
