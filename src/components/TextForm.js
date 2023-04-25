import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("LowerCase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here2");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <div className="py-3">
      <h2>{props.heading}</h2>
      <div className="my-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
    </div>
  );
}
