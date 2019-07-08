import React from "react";
import "./Footer.scss";

/**
 * Footer class/component
 * @description returns a footer with a section tag with a p tag
 */
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section>
          <p>&copy; Rose 2019</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
