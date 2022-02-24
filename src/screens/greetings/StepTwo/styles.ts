import styled from "styled-components/native";
import { Dimensions } from "react-native";

const size = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text``;

export const ButtonContainer = styled.View`
  width: ${size.width * 0.8}px;
  height: 100px;
  margin-top: 30px;
`;

export const Button = styled.Button``;

export const ConfirmeTermsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
