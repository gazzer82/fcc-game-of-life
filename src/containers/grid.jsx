import React, {Component} from 'react';
import GridBox from '../components/grid_box.jsx';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {generateCells} from '../actions/actions_cells'

//import Dimensions from 'react-dimensions';

//Default objects for our grid sizes

const fiftyWide = {
  width: 50,
  height: 30
};

const seventyWide = {
  width: 70,
  height: 50
};

const hundredWide = {
  width: 100,
  height: 80
};

class Grid extends Component {
  constructor(props){
    super(props);
    this.generateGrid = this.generateGrid.bind(this);
    this.state = {
      widthClass: 'fifty-wide',
      sizeObject: fiftyWide
    }
    //this.props.generateCells();
    console.log(this.props.generateCells);
    console.log('cells are ' + this.props.cells);
  }
  generateGrid(){
    var boxGrid = [];
    const boxCount = this.state.sizeObject.width*this.state.sizeObject.height;
    for(var i=0; i< boxCount; i++){
      boxGrid.push(<GridBox key={i} number={i+1} widthClass={this.state.widthClass}/>)
    }
    return boxGrid;
  }
  render(){
    return(
      <div className='grid-outer'>
        {this.generateGrid()}
        //<button onClick={this.props.generateCells()} >Generate Cells </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    generateCells: generateCells
  },dispatch);
}

function mapStateToProps({cells}){
  return {cells};
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
