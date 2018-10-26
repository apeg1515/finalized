import React from "react";
import { Navbar } from "react-bootstrap";

class DefaultNavbar extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default DefaultNavbar;
