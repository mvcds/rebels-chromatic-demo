import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TextField from "./TextField";

function App() {
  const [isOpen, setOpen] = useState(false);

  const onOpen = useCallback(() => setOpen(true), [setOpen]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isOpen ? (
          <TextField autoFocus />
        ) : (
          <button onClick={onOpen}>Fake complicated steps</button>
        )}
      </header>
    </div>
  );
}

export default App;
