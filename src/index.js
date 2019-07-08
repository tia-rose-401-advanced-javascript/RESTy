import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.scss";

class Index extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
