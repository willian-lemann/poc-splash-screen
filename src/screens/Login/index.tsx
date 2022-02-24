import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useAuth } from "../../store/auth";

import {
  Container,
  BackgroundImage,
  FormContainer,
  EmailTextField,
  PasswordTextField,
  PasswordTextfieldContainer,
  SuffixIcon,
  ForgotPasswordLabel,
  LoginButtonContainer,
  LoginButtonLabel,
  DividerContainer,
  Divider,
  DividerText,
  SocialLoginButtonContainer,
  GIcon,
  SocialLoginButtonLabel,
  DontHaveAccountContainer,
  Label,
  RegisterLabelContainer,
  RegisterLabel,
  Loading,
} from "./styles";

interface Form {
  email: string;
  password: string;
}

export const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signIn, currentUser } = useAuth();
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleChangePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleChange(name: string, value: string) {
    setForm({ ...form, [name]: value });
  }

  async function handleLogin() {
    setLoading(true);
    await signIn(form.email, form.password);

    navigation.navigate("Login");
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <StatusBar hidden />

      <Container>
        <BackgroundImage />

        <FormContainer>
          <EmailTextField
            placeholder="Email"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <PasswordTextfieldContainer>
            <PasswordTextField
              value={form.password}
              onChangeText={(text) => handleChange("password", text)}
              placeholder="Password"
              secureTextEntry={showPassword}
            />
            <SuffixIcon
              onPress={handleChangePasswordVisibility}
              showPassword={showPassword}
            />
          </PasswordTextfieldContainer>

          <ForgotPasswordLabel>Forgot password?</ForgotPasswordLabel>

          <LoginButtonContainer
            disable={!form.email || !form.password}
            onPress={handleLogin}
          >
            <LoginButtonLabel>Login</LoginButtonLabel>

            {loading && <Loading size="large" />}
          </LoginButtonContainer>

          <DividerContainer>
            <Divider />
            <DividerText>or</DividerText>
            <Divider />
          </DividerContainer>

          <SocialLoginButtonContainer
            activeOpacity={0.7}
            onPress={signInWithGoogle}
          >
            <GIcon />
            <SocialLoginButtonLabel>
              Continue with Google
            </SocialLoginButtonLabel>
          </SocialLoginButtonContainer>

          <DontHaveAccountContainer>
            <Label>Don’t have an account? </Label>
            <RegisterLabelContainer
              onPress={() => navigation.navigate("Register")}
            >
              <RegisterLabel>Register!</RegisterLabel>
            </RegisterLabelContainer>
          </DontHaveAccountContainer>
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};
