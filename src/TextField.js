function TextField({ TestText, userText }) {
  return (
    <div className="text">
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
