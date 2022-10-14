/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const ChatForm = styled.form`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .form-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.15rem;
    color: white;
    background-color: #4a647a;
    outline: none;
    ::placeholder {
      color: white;
    }
  }
  .form-button {
    position: absolute;
    width: 15%;
    height: 100%;
    right: 0;
    top: 0;
    background: #374b5c;
    border: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
  }
`;

const SendMessage = ({ scroll }) => {
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputValue === "" || inputValue.match(/^\s*$/)) {
      // eslint-disable-next-line no-alert
      alert("Escrever Mensagem");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: inputValue,
      name: displayName,
      photo: photoURL,
      uid,
      timestamp: serverTimestamp(),
    });
    setInputValue("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChatForm onSubmit={sendMessage}>
      <input
        className="form-input"
        type="text"
        placeholder="Message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="form-button" type="submit">
        <RiSendPlaneFill />
      </button>
    </ChatForm>
  );
};

export default SendMessage;
