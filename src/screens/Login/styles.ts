import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import background from "../../assets/background.png";

const size = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.Image.attrs(() => {
  return {
    source: background,
    alt: "background image",
  };
})`
  width: ${size.width}px;
  height: ${size.height * 0.6}px;
`;

export const FormContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex: 1;
  height: ${size.height * 0.55}px;
  background-color: #fff;
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
  align-items: center;
`;

const inputsStyle = css`
  width: ${size.width * 0.8}px;
  height: 60px;
  background-color: #f4f4f4;
  border-radius: 8px;
  font-size: 18px;
`;

export const EmailTextField = styled.TextInput`
  ${inputsStyle};
  margin-top: 30px;
  padding-left: 10px;
`;

export const PasswordTextfieldContainer = styled.View`
  ${inputsStyle};
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PasswordTextField = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  border-radius: 8px;
  height: 100%;
  ${inputsStyle};
`;

interface SuffixIconProps {
  showPassword: boolean;
}

export const SuffixIcon = styled(MaterialIcons).attrs(
  ({ showPassword }: SuffixIconProps) => {
    return {
      name: showPassword ? "remove-red-eye" : "visibility-off",
      size: 24,
      color: "#b4b4b4",
    };
  }
)`
  margin-right: 15px;
`;

export const ForgotPasswordLabel = styled.Text`
  color: #b4b4b4;
  font-weight: bold;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 40px;
`;

const buttonStyles = css`
  height: 48px;
  width: ${size.width * 0.8}px;
  elevation: 2;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

interface LoginButtonContainer {
  disable: boolean;
}

export const LoginButtonContainer = styled(RectButton)<LoginButtonContainer>`
  ${buttonStyles};
  margin-top: 20px;
  background: ${({ disable }) => (disable ? "#e2e2e2" : "#6a3093")};
`;

export const LoginButtonLabel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const DividerContainer = styled.View`
  width: ${size.width * 0.8}px;
  margin: 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.View`
  background-color: #b4b4b4;
  height: 2px;
  width: ${size.width * 0.35}px;
`;

export const DividerText = styled.Text`
  margin: 0 10px 3px;
  color: #b4b4b4;
`;

export const SocialLoginButtonContainer = styled(RectButton)`
  ${buttonStyles};
  background-color: #d93025;
  flex-direction: row;
  justify-content: center;
`;

export const GIcon = styled(MaterialIcons).attrs(() => {
  return {
    name: "login",
    size: 24,
    color: "#fff",
  };
})`
  margin-right: 10px;
`;

export const SocialLoginButtonLabel = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const DontHaveAccountContainer = styled.View`
  margin: 20px 0;

  flex-direction: row;
`;

const labelStyles = css`
  font-size: 16px;
  font-weight: bold;
`;

export const Label = styled.Text`
  ${labelStyles};
  color: #b4b4b4;
`;

export const RegisterLabelContainer = styled.TouchableWithoutFeedback``;

export const RegisterLabel = styled.Text`
  ${labelStyles};
  font-size: 16px;
  color: #6a3093;
  margin-left: 3px;
`;

export const Loading = styled.ActivityIndicator``;
