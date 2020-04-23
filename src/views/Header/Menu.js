import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/image/brand/logo-white.png';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.menuRef = React.createRef();
  }

  handleMenuState = ()=>{
    this.setState((prevState)=>({
      open: !prevState.open
    }))
  }

  handleMenuView = ()=>{
    if(this.state.open) {
      this.menuRef.current.classList.add("menu-open");
    }else {
      this.menuRef.current.classList.remove("menu-open");
    }
  }

  componentDidUpdate() {
    this.handleMenuView();
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleMenuState} className="menu-btn">
          <i className="fa fa-align-justify"></i>
        </button>
        <Navbar className="menu-div" ref={this.menuRef}>
          <Navbar.Brand href="#home">
            <img src={Logo} className="d-block align-top" alt="company logo"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleMenuState} href="/">Home</Nav.Link>
            <Nav.Link onClick={this.handleMenuState} href="#about">About US</Nav.Link>
            <Nav.Link onClick={this.handleMenuState} href="#feature">Features</Nav.Link>
            <Nav.Link onClick={this.handleMenuState} href="#testimonial">Testimonial</Nav.Link>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Menu;