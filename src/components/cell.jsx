import React, {Component} from 'react';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAlive, setDead} from '../actions/actions_cells'

export default class Cell extends Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.colorClass !== nextProps.colorClass || this.props.widthClass !== nextProps.widthClass || this.props.currentGeneration - this.props.generation);
  }
  clickHandler(){
    if(this.props.colorClass === 1){
      //console.log('setting cell ' + this.props.id + ' dead');
      this.props.setDead(this.props.id);
    } else {
      //console.log('setting cell ' + this.props.id + ' alive');
      this.props.setAlive(this.props.id);
    }

  }
  cellClass(){
    if(this.props.colorClass === 0){
      return 'dead'
    } else {
      return (this.props.currentGeneration - this.props.generation > 2) ? 'old' : 'alive';
    }
  }
  render(){
    return (
      <div className={'grid-box ' + this.props.widthClass}><div onClick={this.clickHandler} className={'grid-box-inner cell cell-' + this.cellClass()}></div></div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setAlive: setAlive,
    setDead: setDead
    },dispatch);
}

export default connect(null, mapDispatchToProps)(Cell);