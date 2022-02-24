import React, { useState } from "react";

import Checkbox from "@react-native-community/checkbox";

import { useNavigation } from "@react-navigation/core";

import {
  Container,
  Text,
  ButtonContainer,
  Button,
  ConfirmeTermsContainer,
} from "./styles";

export const StepTwo = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  function goNext() {
    if (!checked) {
      return;
    }

    navigation.navigate("Login");
  }

  return (
    <Container>
      <Text>Welcome to step two</Text>
      <ButtonContainer>
        <Button title="Go next" onPress={goNext} />
        <ConfirmeTermsContainer>
          <Text>Confirmed terms</Text>
          <Checkbox
            tintColors={{
              true: "green",
              false: "#2196F3",
            }}
            disabled={false}
            value={checked}
            onValueChange={(value) => setChecked(value)}
          />
        </ConfirmeTermsContainer>
      </ButtonContainer>
    </Container>
  );
};
