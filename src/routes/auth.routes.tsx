import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../store/auth";

import { GreetingStack } from "../routes/stacks/GreetingStack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Navigator>
      {!currentUser?.hasConfirmedRegulation && (
        <Screen
          name="GreetingStack"
          component={GreetingStack}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
