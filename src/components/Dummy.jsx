import React from "react";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import "./Dummy.css";

const Dummy = () => {
  const { text, setText } = useContext(MyContext);
  const [prevText, setPrevText] = useState("");

  function changeHandler() {
    const newText = text === "Hello" ? prevText : "Hello";
    setText(newText);
    setPrevText(text); // Save the current text as previous text
  }
  return (
    <div className="main">
      <div className="sub">
        <h1>{text}</h1>
        <button onClick={changeHandler}>Click</button>
      </div>
    </div>
  );
};

export default Dummy;
