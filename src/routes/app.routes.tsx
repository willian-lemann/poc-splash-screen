import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { HeaderAction as headerRight } from "../screens/Home/HeaderAction";

import { Home } from "../screens/Home";
import { Messages } from "../screens/Messages";

export const AppRoutes = () => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
      options={{
        headerRight,
      }}
    />

    <Screen
      name="Messages"
      component={Messages}
      options={{
        headerRight,
      }}
    /> 
  </Navigator>
);
