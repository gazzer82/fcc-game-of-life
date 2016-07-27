
import React, {Component} from 'react';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRes} from '../actions/actions_res';
import {generateCells, stepState, clearCells} from '../actions/actions_cells';
import {startGame, stopGame, setSpeed} from '../actions/actions_controls';

class LowerButtons extends Component {
  startTimer(){
    var that = this;
    if(this.props.controls.game === 'running'){
        this.props.stepState();
    }
    setTimeout(() => this.triggerTimer(), this.props.controls.speed);
  }
  triggerTimer(){
    this.startTimer();
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //this.startTimer();
    setInterval(() => this.props.stepState(), 100);
  }
  handleClick(res){
    this.props.setRes(res);
    this.props.generateCells();
  }
  render(){
    return (
      <div>
        <div className='lower-buttons'>
          <button onClick={() => {this.handleClick('50')}}>50x30</button>
          <button onClick={() => {this.handleClick('70')}}>70x50</button>
          <button onClick={() => {this.handleClick('100')}}>100x80</button>
        </div>
        <div>
          <button onClick={() => {this.props.startGame()}}>Run</button>
          <button onClick={() => {this.props.stopGame()}}>Pause</button>
          <button onClick={() => {this.props.clearCells()}}>Clear</button>
        </div>
        <div>
          <button onClick={() => {this.props.setSpeed(500)}}>Slow</button>
          <button onClick={() => {this.props.setSpeed(250)}}>Medium</button>
          <button onClick={() => {this.props.setSpeed(100)}}>Fast</button>
        </div>
        <h1>{this.props.generation}</h1>
      </div>
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

function mapStateToProps({controls, generation}){
  return {
    controls,
    generation
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LowerButtons);
