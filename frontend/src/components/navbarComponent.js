import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #000;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 2.4em;
    color: #fff;
    &:hover {
      color: #9FFCB;
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">VuyIt</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl
          type="text"
          placeholder="Search for products .. "
          className=""
        />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">SignIn</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
