import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [text, setText] = useState("Interpretation will appear here");
  const [remark, setRemark] = useState("");

  const emojiObj = {
    "😀": "Happy Boi",
    "😁": "beaming face with smiling eyes",
    "😂": "face with tears of joy",
    "🤣": "rolling on the floor laughing",
    "😃": "grinning face with big eyes",
    "😄": "grinning face with smiling eyes",
    "😅": "grinning face with sweat",
    "😆": "grinning squinting face",
    "😎": "smiling face with sunglasses",
    "😝": "squinting face with tongue",
    "🤑": "money-mouth face",
    "🥶": "cold face",
    "😱": "face screaming in fear",
    "👹": "ogre",
    "👺": "goblin",
    "💀": "skull",
    "🤡": "clown face",
    "👽": "alien",
    "👻": "ghost",
    "☠": "skull with crossbones"
  };

  const emojis = Object.keys(emojiObj);

  const interpretations = Object.values(emojiObj);

  const clickHandler = (e) => {
    setText(emojiObj[e.target.textContent]);
  };

  const changeHandler = (e) => {
    setText("Cannot find an emoji quite like this one.");
    setRemark(e.target.value);
    if (interpretations.includes(e.target.value)) {
      setRemark(emojis[interpretations.indexOf(e.target.value)]);
    } else if (emojis.includes(e.target.value)) {
      setRemark(emojiObj[e.target.value]);
    }
  };

  return (
    <div className="app">
      <header>
        <nav>
          <h1>Emoji Pedia</h1>
        </nav>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Search for an emoji..."
          onChange={changeHandler}
        />
        <p>{remark}</p>
        <p>{text}</p>
        <div className="emoji">
          {emojis.map((emoji, index) => {
            return (
              <div key={index} className="emojis" onClick={clickHandler}>
                {emoji}
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        Do you know what your emoji's mean? Well, about time you find out...
      </footer>
    </div>
  );
};

export default App;
