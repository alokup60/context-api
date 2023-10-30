import "./App.css";
import { useState } from "react";
import { MyContext } from "./context/MyContext";
import Dummy from "./components/Dummy";

function App() {
  const [text, setText] = useState("Welcome");
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <Dummy />
      </MyContext.Provider>
    </div>
  );
}

export default App;
