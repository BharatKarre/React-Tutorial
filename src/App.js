import React, { useState } from "react";
import "./App.css";

//import logo from './logo.svg';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [myalert, setMyAlert] = useState(null);

  const showAlert = (message, type) => {
    setMyAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setMyAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About Us"
        mode={mode}
        togglemode={togglemode}
      ></Navbar>
      <Alert myalert={myalert}></Alert>

      <Routes>
        <Route exact path="/about" element={<About></About>} />
        <Route
          exact path="/"
          element={
            <Textform
              heading="Enter the text you wanna analize below"
              mode={mode}
              showAlert={showAlert}
            ></Textform>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
