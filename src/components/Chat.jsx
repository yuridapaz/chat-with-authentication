/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SendMessage from "./SendMessage";
import { db } from "../firebase";
import Message from "./Message";

export const ChatBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 100px 12px;
  background-color: #eaeff3;
  /* border-left: 3px solid #374b5c; */
  /* border-right: 3px solid #374b5c; */
  display: flex;
  flex-direction: column;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const mes = [];
      querySnapshot.forEach((doc) => {
        mes.push({ ...doc.data(), id: doc.id });
      });
      setMessages(mes);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ChatBox>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </ChatBox>
      <SendMessage scroll={scroll} />
      <span ref={scroll} />
    </>
  );
};

export default Chat;
