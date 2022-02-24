import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StepOne } from "../../screens/greetings/StepOne";
import { StepTwo } from "../../screens/greetings/StepTwo";

const { Navigator, Screen } = createNativeStackNavigator();

export function GreetingStack() {
  return (
    <Navigator>
      <Screen
        name="StepOne"
        component={StepOne}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Screen
        name="StepTwo"
        component={StepTwo}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Navigator>
  );
}
