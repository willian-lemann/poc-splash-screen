import React, { useCallback, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

import { Container } from "./styles";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback((messages = []) => {
    setMessages((state) => [GiftedChat.append(state, messages)]);
  }, []);

  return (
    <Container
      messages={messages}
      onSend={(messages) => sendMessage(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};
