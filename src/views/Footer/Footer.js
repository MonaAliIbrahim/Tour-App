import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import logo from '../../assets/image/brand/logo-green.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col xs={12} className="footer-logo">
              <img src={logo} alt="company-logo"/>
            </Col>
            <Col xs={12}>
              <Row className="d-flex justify-content-between">
                <Col xs={12} md={5} className="footer-navigation">
                  <Nav>
                    <Nav.Link to="/">company</Nav.Link>
                    <Nav.Link to="/">contact us</Nav.Link>
                    <Nav.Link to="/">career</Nav.Link>
                    <Nav.Link to="/">privacy policy</Nav.Link>
                    <Nav.Link to="/">terms</Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={5} className="footer-copyright">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.<br></br>
                  Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.<br></br>
                  Copyright &copy; by <span>mona ali</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;