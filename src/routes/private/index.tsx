import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import Rocket from "../../pages/Rocket";

const PrivateStack = createNativeStackNavigator();

export const Private = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />

      <PrivateStack.Screen
        options={{ headerShown: false }}
        name="Rocket"
        component={Rocket}
      />
    </PrivateStack.Navigator>
  );
};
