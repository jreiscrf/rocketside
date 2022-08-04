import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const useHome = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const goBack = React.useCallback(() => {
    navigate("Home" as never);
  }, []);

  return {
    goBack,
  };
};

export default useHome;
