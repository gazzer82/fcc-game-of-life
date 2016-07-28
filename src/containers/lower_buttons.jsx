
import React, {Component} from 'react';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRes} from '../actions/actions_res';
import {generateCells, stepState, clearCells} from '../actions/actions_cells';
import {startGame, stopGame, setSpeed} from '../actions/actions_controls';

//Grid
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

class LowerButtons extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(res){
    this.props.setRes(res);
    this.props.generateCells();
  }
  render(){
    return (
      <Grid>
        <Row className='lower-button-row' around="xs">
          <Col className='lower-button-col' xs={8} md={6} lg={5}>
            <Row around="xs">
              <Col xs={12}>
                <Row>
                  <Col xs={4}>
                    <span>Board Size:</span>
                  </Col>
                  <Col xs={8}>
                    <button className={`lower-buttons ${(this.props.res.width === 50) ? ' button-active' : ''}`} onClick={() => {this.handleClick('50')}}>50x30</button>
                    <button className={`lower-buttons ${(this.props.res.width === 70) ? ' button-active' : ''}`} onClick={() => {this.handleClick('70')}}>70x50</button>
                    <button className={`lower-buttons ${(this.props.res.width === 100) ? ' button-active' : ''}`} onClick={() => {this.handleClick('100')}}>100x80</button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row around="xs">
              <Col xs={12}>
                <Row>
                  <Col xs={4}>
                    <span>Sim Speed:</span>
                  </Col>
                  <Col xs={8}>
                    <button className={`lower-buttons ${(this.props.controls.speed === 500) ? ' button-active' : ''}`} onClick={() => {this.props.setSpeed(500)}}>Slow</button>
                    <button className={`lower-buttons ${(this.props.controls.speed === 250) ? ' button-active' : ''}`} onClick={() => {this.props.setSpeed(250)}}>Medium</button>
                    <button className={`lower-buttons ${(this.props.controls.speed === 100) ? ' button-active' : ''}`} onClick={() => {this.props.setSpeed(100)}}>Fast</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}
//const defaultState = {
  //speed: 250,
  //game: 'running'
//}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setRes: setRes,
    generateCells: generateCells,
    stepState,
    startGame,
    stopGame,
    setSpeed,
    clearCells
  },dispatch);
}

function mapStateToProps({controls, generation, res}){
  return {
    controls,
    generation,
    res
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LowerButtons);
