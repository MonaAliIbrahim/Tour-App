import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import About1 from '../../assets/image/AboutUs/1.jpg';
import About2 from '../../assets/image/AboutUs/2.jpg';
import About3 from '../../assets/image/AboutUs/3.jpg';

class AboutUs extends Component {

  constructor(props){
    super(props);
    this.state = {
      aboutContent: [
        {id:1, title:'You are going to fall in love with nature',
         description:'Lorem ipsum dolor sit amet consectetur. Asperiores nulla deserunt voluptatum name. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.'},
        {id:2, title:'Live adventures like you never have before', 
         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.'},
      ]
    }
    this.aboutRef = React.createRef();
  }

  renderAboutContent = ()=>{
    return(
      this.state.aboutContent.map((element)=>{
        return(
          <div key={element.id} className="about-content">
            <h3 className="title">{element.title}</h3>
            <p className="description">{element.description}</p>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="about-section" id="about">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="main-title">Exciting tours for adventurous people</h2>
            </Col>
            <Col xs={12} lg={6}>
              { this.renderAboutContent() }
              <button className="read-btn">learn more<i className="fa fa-arrow-right"></i></button>
            </Col>
            <Col xs={12} lg={6}>
              <div className="image-container">
                <img src={About1} alt="about us view"/>
                <img src={About2} alt="about us view"/>
                <img src={About3} alt="about us view"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUs;