import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😢": "Crying",
  "😲": "Astonished",
  "🤖": "Robot",
  "🎳": "Bowling",
  "⛰️": "Mountain",
  "🙃": "Upside-down",
  "🤩": "excited",
  "❤": "love",
  "🔥": "fire",
  "😎": "cool",
  "🙌": "hi-fi",
  "👌": "okay",
  "😃": "Grinning Face with Big Eyes",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "😇": " Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😘": " Face Blowing a Kiss",
  "🤑": "Money-Mouth Face",
  "😳": "disbelief",
  "👇🏻": "index pointing down",
  "🤗": "Hugging Face",
  "🤪": " Zany Face",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😷": "Face with Medical Mask",
  "🤒": "ace with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😨": "Fearful Face",
  "💀": "Skull",
  "☠️": "Skull and Crossbones",
  "🤡": "Clown Face",
  "👹": "Ogre",
  "👺": "Goblin",
  "👻": "Ghost",
  "👽": "Alien",
  "😻": "Smiling Cat with Heart-Eyes",
  "😼": "Cat with Wry Smile",
  "🌅": "Sunrise",
  "🚴": "Cyclist",
  "🍿": "Popcorn",
  "♾️": "Infinity"
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
