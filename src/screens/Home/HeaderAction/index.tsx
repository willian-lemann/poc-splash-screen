import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ActionButtonContainer, ActionButton } from "./styles";

export const HeaderAction = () => {
  const navigation = useNavigation();

  return (
    <ActionButtonContainer>
      <ActionButton
        title="Chat"
        onPress={() => navigation.navigate("Messages")}
      />
    </ActionButtonContainer>
  );
};
