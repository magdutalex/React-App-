import React, { useState } from "react";

const Prompter = () => {
  const [prompt, setPrompt] = useState("");
  const [inputText, setInputText] = useState("");

  const changeTextInParagraph = () => {
    setPrompt(inputText);
  };

  return (
      <div>
        <input
          type="text"
          value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={() => changeTextInParagraph()}>Prompt!</button>
      <p>{prompt}</p>
    </div>
  );
};

export default Prompter;
