/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const MessageContainer = styled.div`
  .message-div {
    box-sizing: border-box;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    word-break: break-all;

    .message-name {
      margin-bottom: 5px;
    }
    .message-content {
      display: flex;
      align-items: flex-end;
      width: 100%;

      .message-photo {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }

      .message-text {
        margin: 0px 20px;
        padding: 8px 12px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px lightgray;
        position: relative;
      }
    }
  }

  .message-text.received::after {
    content: "";
    position: absolute;
    border-top: 0px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid #e2e2e2;
    clear: both;
    left: -14px;
    bottom: 4px;
  }

  .message-text.sent::after {
    content: "";
    position: absolute;
    border-top: 3px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #379ff9;
    clear: both;
    right: -14px;
    bottom: 4px;
  }

  .sent {
    align-items: flex-end;
  }

  .message-content.sent {
    flex-direction: row-reverse;
  }

  .message-text.sent {
    background-color: #379ff9;
    color: white;
  }

  .message-text.received {
    background-color: #e2e2e2;
    color: black;
  }
`;

function Message({ message }) {
  const messageClass =
    message.uid === auth.currentUser?.uid ? `sent` : `received`;

  return (
    <MessageContainer>
      <div className={`message-div ${messageClass}`}>
        <p className="message-name">{message.name}</p>
        <div className={`message-content ${messageClass}`}>
          <img src={message.photo} alt="" className="message-photo" />
          <p className={`message-text ${messageClass}`}> {message.text} </p>
        </div>
      </div>
    </MessageContainer>
  );
}

export default Message;
