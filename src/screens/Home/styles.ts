import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const size = Dimensions.get("window");

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: ${size.width * 0.8}px;
  height: 100px;
  margin-top: 30px;
`;

export const Button = styled.Button``;
