import React from "react";
import "./Label.scss";

/**
 * Label class/component
 * returns labels with input type being radio and name being method
 */
class Label extends React.Component {
  render() {
    return (
      <label>
        {/* Trying to make Label Component but no sure the best way to change the value so it says GET, POST, etc. Need the value to be what the span tag is so the text area can be disabled or not */}
        <input type="radio" name="method" value="" />
        {this.props.children}
      </label>
    );
  }
}

export default Label;
