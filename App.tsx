import React, { useEffect } from "react";

import { Routes } from "./src/routes";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { AuthProvider } from "./src/store/auth";

export default function App() {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
