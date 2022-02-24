import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Text, ButtonContainer, Button } from "./styles";

export const StepOne = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Welcome to step one</Text>
      <ButtonContainer>
        <Button title="go" onPress={() => navigation.navigate("StepTwo")} />
      </ButtonContainer>
    </Container>
  );
};
