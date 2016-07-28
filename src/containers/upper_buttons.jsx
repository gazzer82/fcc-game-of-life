
import React, {Component} from 'react';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRes} from '../actions/actions_res';
import {generateCells, stepState, clearCells} from '../actions/actions_cells';
import {startGame, stopGame, setSpeed} from '../actions/actions_controls';

//Grid
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

class UpperButtons extends Component {
  startTimer(){
    var that = this;
    if(this.props.controls.game === 'running'){
        this.props.stepState(this.props.res, this.props.generation);
    }
    setTimeout(() => this.triggerTimer(), this.props.controls.speed);
  }
  triggerTimer(){
    this.startTimer();
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(res){
    this.props.setRes(res);
    this.props.generateCells();
  }
  componentDidMount(){
    this.startTimer();
  }
  render(){
    return (
      <Grid>
        <Row center="xs">
          <Col className='header-button-row' xs={8} md={6} lg={5}>
            <Row middle="xs">
              <Col xs={7}>
                <button className={`upper-buttons ${(this.props.controls.game === 'running') ? ' button-active' : ''}`} onClick={() => {this.props.startGame()}}>Run</button>
                <button className={`upper-buttons ${(this.props.controls.game === 'stopped') ? ' button-active' : ''}`} onClick={() => {this.props.stopGame()}}>Pause</button>
                <button className='upper-buttons' onClick={() => {this.props.clearCells()}}>Clear</button>
              </Col>
              <Col xs={5}>
                <h3>{`Generation: ${this.props.generation}`}</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UpperButtons);
