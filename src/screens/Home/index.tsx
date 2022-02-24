import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../store/auth";

import { Container, ButtonContainer, Button } from "./styles";

export const Home = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  async function handleSignout() {
    await signOut();
  }

  return (
    <Container>
      <Text>Aqui é home</Text>

      <ButtonContainer>
        <Button title="Logout" onPress={handleSignout} />
      </ButtonContainer>
    </Container>
  );
};
