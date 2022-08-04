import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAuthenticated, setUser } from "../../stores/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

const useLogin = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { email, password } = useSelector((state) => state.auth);

  const navigateToHomeScreen = React.useCallback(async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        dispatch(setUser(value.user.providerData));
        dispatch(setAuthenticated(true));
      })
      .catch((error) => {
        alert("Try Again");
      });
  }, [email, password]);

  const handleSignUp = async () => {
    navigate("SignUp" as never);
  };

  return {
    email,
    password,
    dispatch,
    navigateToHomeScreen,
    handleSignUp,
  };
};

export default useLogin;
