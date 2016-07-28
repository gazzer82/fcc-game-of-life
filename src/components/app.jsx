import React, { Component,  } from 'react';
import CellGrid from '../containers/cellgrid';
import LowerButtons from '../containers/lower_buttons';
import UpperButtons from '../containers/upper_buttons';

import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  render(){
    return(
      <Grid>
        <Row className='header-row'>
          <Col xs={12}>
            <h2>
              ReactJS Game of Life <a href='https://www.math.cornell.edu/~lipa/mec/lesson6.html'>(click to learn more)</a>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <UpperButtons />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <CellGrid />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <LowerButtons/>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={7} md={6} lg={5}>
            <div className='lower-text'>
              Feel free to add cells while it's running. The cells in light red are younger, dark red are older. Enjoy!
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={6}>
            <a href='https://github.com/gazzer82/fcc-game-of-life'><h4>View Source Code</h4></a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps({controls}){
  return {
    controls
  };
}

export default connect(mapStateToProps, null)(App);
