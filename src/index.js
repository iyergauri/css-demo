import ReactDOM from "react-dom/client";
import React from "react";
import One from "./components/one.jsx";
import Two from "./components/two.jsx";
import Three from "./components/three.jsx";
import './styles.css';

const App = () => {
  return <>
    <nav>top bar</nav>
    <h1 className="heading"> Sample App </h1>
    <div className="content">
      <div className="text">
        <One />
        <Three />
      </div>
      <Two />
    </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);