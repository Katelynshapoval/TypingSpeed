import "./App.css";
import TextField from "./TextField";
import Timer from "./Timer";
import { useState, useEffect, useRef } from "react";

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
  // A ref to store the initial change flag
  const isInitialChangeRef = useRef(false);
  // State variable for time
  const [time, setTime] = useState(60);
  useEffect(() => {
    // Check if the initial change has occurred
    if (isInitialChangeRef.current) {
      // Start the interval only if the initial change has occurred
      // Set up the interval to execute the callback every 1 second
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            // Clear the interval when the condition is false (time reaches 0)
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000);
      // Clean up function to clear the interval when the component unmounts

      return () => {
        clearInterval(interval);
      };
    }
  }, [isInitialChangeRef.current]);

  // If any key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Set the initial change flag to true
      isInitialChangeRef.current = true;
      if (time > 0) {
        // If user clicked on the correct key
        if (e.key === TestText[0]) {
          // Remove the first character from TestText
          setTestText(TestText.substring(1));
          // If the space is clicked
          if (e.key === " ") {
            setFinishedText(finishedText + userText);
            setUserText(" ");
            setIncorrectText([]);
          } else {
            let text = userText + TestText[0];
            setUserText(text);
          }
          // if backspace is clicked and usertext is not empty
        } else if (
          e.key === "Backspace" &&
          userText !== " " &&
          userText !== ""
        ) {
          // If the last letter is incorrect
          if (incorrectText.includes(userText.length - 1)) {
            // Remove the index of the last letter from incorrectText
            let newArr = incorrectText.filter(
              (id) => id !== userText.length - 1
            );
            setIncorrectText(newArr);
          } else {
            // To put the correct letter back which was removed to the initial text
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
          // Add the index of the incorrect key to incorrectText
          let newArr = [...incorrectText];
          newArr.push(userText.length);
          setIncorrectText(newArr);
          setUserText(newText);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [TestText, userText]);

  return (
    <div className="App">
      <Timer time={time} />
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
