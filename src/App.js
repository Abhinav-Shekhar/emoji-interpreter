import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😢": "Crying",
  "😲": "Astonished",
  "🤖": "Robot",
  "🎳": "Bowling",
  "⛰️": "Mountain",
  "🙃": "Upside-down"
};

var knownEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter!!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {knownEmoji.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
