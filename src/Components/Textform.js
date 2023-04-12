import React, { useState } from "react";
//import PropTypes from 'prop-types';

export default function Textform(props) {

  const [text, setText] = useState("");

  const wordCount = (text) => {
    if (text.length === 0) {
      return text.length
    }
    else{
      return text.split(" ").length
    }
  }

  const handleUpclick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to UpperCase", "success");
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to LowerCase", "success");
  };
  const handleCLclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared", "success");
  };
  const handleCpclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been Copied", "success");
  };
  const handleExspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces from the text has been removed", "success");
  };

  const handleOnchange = (event) => {
    //console.log("Onchange has been triggered");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ backgroundColor: props.mode === "dark" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label
            htmlFor="mytextbox"
            className="form-label fw-bold"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mytextbox"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 fw-bold`}
          onClick={handleUpclick}
        >
          UpperCase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 fw-bold`}
          onClick={handleLoclick}
        >
          LowerCase
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 fw-bold`}
          onClick={handleCLclick}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 fw-bold`}
          onClick={handleCpclick}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 fw-bold`}
          onClick={handleExspace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordCount(text)} words and {text.length} characters and Can
          read in {0.008 * wordCount(text)} minutes
        </p>
        <h3>Preview</h3>
        <p>{text.length === 0 ? "Enter text above to preview" : text}</p>
        {/* <p>{wordCount(text)}</p> */}
      </div>
    </>
  );
}
