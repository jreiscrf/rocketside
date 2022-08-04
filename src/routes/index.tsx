import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Public } from "./public";
import { Private } from "./private";
import { useSelector } from "react-redux";

export const Routes = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <NavigationContainer>{auth ? <Private /> : <Public />}</NavigationContainer>
  );
};
