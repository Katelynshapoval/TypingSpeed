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
  // If any key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === TestText[0]) {
        let text = userText + TestText[0];
        setTestText(TestText.substring(1));
        setUserText(text);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [TestText]);

  return (
    <div className="App">
      <TextField userText={userText} TestText={TestText} />
    </div>
  );
}

export default App;
