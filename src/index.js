import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Cool = props => {
  return (
    <div style={styles}>
      <h2> lets have some magic</h2>
      <h2>{props.count}</h2>
    </div>
  );
};
let count = 0;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
setInterval(
  () =>
    ReactDOM.render(<Cool count={count++} />, document.getElementById("root")),
  500
);
