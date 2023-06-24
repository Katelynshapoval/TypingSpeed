function TextField({ TestText, userText, finishedText }) {
  return (
    <div className="text">
      <div className="finishedWrappper">
        <p
          style={{ "text-align": "right", color: "blue" }}
          className="finishedText"
        >
          {finishedText}
        </p>
      </div>
      <div className="inputWrapper">
        <p style={{ "text-align": "right", color: "red" }} className="textUser">
          {userText}
        </p>
      </div>
      <div className="textTestWrapper">
        <p className="textTest">{TestText}</p>
      </div>
    </div>
  );
}

export default TextField;
