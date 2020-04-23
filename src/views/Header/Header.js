import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../../assets/image/header-background.jpg';
import logo from '../../assets/image/brand/logo-white.png';

class Header extends Component {
  render() {
    return (
      <header style={{background: `url(${Background}) 0 0 / cover no-repeat`}}>
        <div className="cover"></div>
        <div className="logo-header">
          <img src={logo} alt="company logo"/>
        </div>
        <Container>
          <Row>
            <Col xs={12} className="header-content">
              <h1>outdoors</h1>
              <h2>is where life happens</h2>
              <button>discover our tours</button>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;