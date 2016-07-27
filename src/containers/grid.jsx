import React, {Component} from 'react';
import Cell from '../components/cell';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {generateCells, stepState} from '../actions/actions_cells'

//import Dimensions from 'react-dimensions';

//Default objects for our grid sizes

class Grid extends Component {
  constructor(props){
    super(props);
    this.generateGrid = this.generateGrid.bind(this);
    this.props.generateCells();
  }
  /*shouldComponentUpdate(nextProps, nextState) {
    //return false;
    //return this.props.cells !== nextProps.cells
    return nextProps.generation = 1;
    //return (this.props.colorClass !== nextProps.colorClass || this.props.widthClass !== nextProps.widthClass || (nextProps.currentGeneration - nextProps.generation) === 3);
  }*/
  generateGrid(){
    return this.props.cells.map( (cell, index)=> {
      return <Cell key={index} number={index+1} id={index} widthClass={this.props.res.widthClass} colorClass={cell.class}/>
    })
  }
  render(){
    return(
      <div className='grid-outer'>
        {this.generateGrid()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    generateCells,
    stepState
    },dispatch);
}

function mapStateToProps({cells, res, generation}){
  return {
    cells: cells,
    res: res,
    generation
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
