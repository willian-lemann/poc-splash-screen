import React, { useState } from "react";
import { useAuth } from "../../store/auth";

import {
  Container,
  Text,
  ButtonContainer,
  Button,
  EmailInput,
  PasswordInput,
} from "./styles";

export const Register = () => {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleRegister() {
    const { email, password } = formData;

    await signUp(email, password);
  }

  return (
    <Container>
      <Text>Register</Text>

      <ButtonContainer>
        <Button title="Register" onPress={handleRegister} />
      </ButtonContainer>
    </Container>
  );
};
