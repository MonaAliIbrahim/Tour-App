import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Background from '../../assets/image/feature-background.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeatures } from '../../redux/Action/FeatureAction';

class Feature extends Component {

  renderFeatures = ()=> {
    return(
      this.props.features.map((element)=>{
        return(
          <Col key={element.id} xs={12} md={6} lg={3}>
            <Card>
              <Card.Header><i className={`fa fa-${element.icon}`}></i></Card.Header>
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })
    )
  }

  render() {
    return (
      <div style={{'background': `url(${Background}) 0 0 / cover no-repeat`}} className="feature-section" id="feature">
        <div className="cover"></div>
        <Container>
          <Row>
            { this.renderFeatures() }
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    features: state.feature.features
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchFeatures,
  }
  , dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Feature);