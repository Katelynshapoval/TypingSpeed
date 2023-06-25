function TextField({ TestText, userText, finishedText, incorrectText }) {
  // If the array of incorrect letters is empty or not
  let correctWrong = `textUser ${
    incorrectText.length === 0 ? "textUser" : "crossText"
  }`;
  return (
    <div className="text">
      <div className="finishedWrappper">
        <p className="finishedText">{finishedText}</p>
      </div>
      <div className="inputWrapper">
        <p className={correctWrong}>{userText}</p>
      </div>
      <div className="textTestWrapper">
        <p className="textTest">{TestText}</p>
      </div>
    </div>
  );
}

export default TextField;
