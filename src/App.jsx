import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import * as C from "./App.styled";
import Signin from "./components/Signin";
import Logout from "./components/Logout";
import Chat from "./components/Chat";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user] = useAuthState(auth);

  return (
    <C.Body>
      <C.ChatContainer>
        <C.ChatNavbar>
          <h1>Welcome the the chat !</h1>
          {user ? <Logout /> : <Signin />}
        </C.ChatNavbar>
        <Chat />
      </C.ChatContainer>
    </C.Body>
  );
}

export default App;
