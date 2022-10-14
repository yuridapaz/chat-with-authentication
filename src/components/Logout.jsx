import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

// eslint-disable-next-line no-undef
const LogoutButton = styled.button`
  background-color: gray;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;

// eslint-disable-next-line react/function-component-definition
const Logout = () => {
  // eslint-disable-next-line no-unused-vars
  const signOut = () => {
    signOut(auth);
  };
  return <LogoutButton onClick={() => auth.signOut()}>Logout</LogoutButton>;
};

export default Logout;
