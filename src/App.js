import "./App.css";
import TextField from "./TextField";
import { useState, useEffect } from "react";

function App() {
  const t =
    "OK, yes. That is a known issue that we still need to address and is not the correct/desired behavior. We do still want to trim space in general, but we'll take a closer look at improving detection of space on the borders inside and outside of inline elements.";
  // Stores the text which user has to type in
  const [TestText, setTestText] = useState(t);
  // Stores the text which user enters
  const [userText, setUserText] = useState("");
  // Stores text that cannot be edited
  const [finishedText, setFinishedText] = useState("");
  // To store indexes of incorrect letters
  const [incorrectText, setIncorrectText] = useState([]);
  // If any key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If user clicked on the correct key
      if (e.key === TestText[0]) {
        setTestText(TestText.substring(1));
        // If the space is clicked
        if (e.key === " ") {
          setFinishedText(finishedText + userText);
          setUserText(" ");
        } else {
          let text = userText + TestText[0];
          setUserText(text);
        }
        // if backspace is clicked and usertext is not empty
      } else if (e.key === "Backspace" && userText !== " " && userText !== "") {
        // If the last letter is incorrect
        if (incorrectText.includes(userText.length - 1)) {
          let newArr = incorrectText.filter((id) => id !== userText.length - 1);
          setIncorrectText(newArr);
        } else {
          setTestText(userText[userText.length - 1] + TestText);
        }
        if (userText.length !== 0) {
          setUserText(userText.slice(0, -1));
        }
        // If wrong key is clicked
      } else if (
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)
      ) {
        let newText = userText + e.key;
        let newArr = [...incorrectText];
        newArr.push(userText.length);
        setIncorrectText(newArr);
        setUserText(newText);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [TestText, userText]);

  return (
    <div className="App">
      <TextField
        userText={userText}
        TestText={TestText}
        finishedText={finishedText}
        incorrectText={incorrectText}
      />
    </div>
  );
}

export default App;
