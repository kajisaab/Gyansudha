import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Components/Body";

function App() {
  return (
    <Router>
      <Navbar />
      <Body />
    </Router>
  );
}

export default App;
