import { useState } from "react";

const TextRepeaterButton = () => {
  const [repititions, setRepititions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repititions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }

  const handleClick = () => {
    setRepititions(repititions + 1);
  };

  return (
    <button className="TextRepeaterButton" onClick={handleClick}>
      <span>{textArray}</span>
    </button>
  );
};

export default TextRepeaterButton;