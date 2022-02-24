import React from "react";
import { NavigationContainer } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      StepOne: string;
      StepTwo: string;
      Home: string;
      Login: string;
      Register: string;
      Messages: string;
    }
  }
}

import { AuthRoutes } from "../routes/auth.routes";
import { AppRoutes } from "../routes/app.routes";
import { useAuth } from "../store/auth";
import { ScreenLoading } from "../components/ScreenLoading";

export const Routes = () => {
  const { signed, loading } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
