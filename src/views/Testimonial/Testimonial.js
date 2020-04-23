import React, { Component } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import Video from '../../assets/video/video.mp4';
import Avatar from '../../assets/image/avatar.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTestimonials } from '../../redux/Action/TestimonialAction';

class Testimonial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) =>{
    this.setState({index: e});
  };

  renderReviews = ()=>{
    return( 
      this.props.reviews.filter((element)=>element.id < 5).map((element)=>{
        return(
          <Carousel.Item key={element.id}  ref={this.inputRef}>
            <Card className="testimonial-card">
              <div className="image-container">
                <Card.Img variant="left" src={element.user_image || Avatar}/>
                <div className="image-caption">{element.user_name}</div>
              </div>
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        )
      })
    )
  }
  
  render(){
    return (
      <div className="testimonial-section" id="testimonial">
        <div className="cover"></div>
        <div className="video-container">
          <video className="video" autoPlay loop muted>
            <source src={Video} type="video/mp4" /> 
          </video>
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="main-title">We make people genuinely happy</h2>
            </Col>
            <Row>
              <Col xs={12}>
                <Carousel activeIndex={this.state.index} onSelect={(e)=>this.handleSelect(e)}>
                  { this.renderReviews() }
                </Carousel>
              </Col>
              <Col xs={12} className="text-center">
                <button className="read-btn">read all stories<i className="fa fa-arrow-right"></i></button>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.testimonial.reviews
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchTestimonials,
  }
  , dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);