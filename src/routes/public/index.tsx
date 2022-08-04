import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/Login";
import Home from "../../pages/Home";
import SignUp from "../../pages/SignUp";

const PublicStack = createNativeStackNavigator();

export const Public = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />

      <PublicStack.Screen
        options={{ navigationBarColor: "#0c3a56" }}
        name="SignUp"
        component={SignUp}
      />
    </PublicStack.Navigator>
  );
};
