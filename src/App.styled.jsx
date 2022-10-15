import styled from "styled-components";

export const Body = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #727f8a;
  }
`;

export const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 992px) {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
`;

export const ChatNavbar = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 1rem;
  font-size: 0.7rem;
  background-color: #374b5c;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 992px) {
    max-width: 900px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
