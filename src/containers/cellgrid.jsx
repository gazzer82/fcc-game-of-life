import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cell from '../components/cell';

//Redux stuff
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {generateCells, stepState, setAlive, setDead} from '../actions/actions_cells';

import Perf from 'react-addons-perf';

//Grid
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

window.Perf = Perf;

var canvas;
var ctx;
//import Dimensions from 'react-dimensions';

var style = {
  width: 100,
  height: 100
}

//Default objects for our grid sizes

class cellGrid extends Component {

  constructor(props){
    super(props);
    this.setCanvasSize = this.setCanvasSize.bind(this);
    this.drawCells = this.drawCells.bind(this);
    this.calculateRow = this.calculateRow.bind(this);
    this.calculateCol = this.calculateCol.bind(this);
    this.updateCellStatus = this.updateCellStatus.bind(this);
  }
  componentWillUpdate(){
    //Perf.start();
  }
  componentDidUpdate(){
    //Perf.stop();
    //Perf.printInclusive();
    //Perf.printWasted();
    //Perf.printDOM();
    this.setCanvasSize();
    this.drawCells();
    style = {
      width: this.props.res.width*13,
      height: this.props.res.height*13
    }
  }
  calculateRow(count){
    return Math.floor(count/this.props.res.width);
  }

  calculateCol(count){
    return Math.floor(count%this.props.res.width);
  }
  findCanvas(){
    canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    ctx = canvas.getContext('2d');
  }
  setCanvasSize(){
    ctx.canvas.width = this.props.res.width*13;
    ctx.canvas.height = this.props.res.height*13;
  }
  drawCells(){
    this.props.cells.forEach((cell, index) => {
      const row = this.calculateRow(index);
      const col = this.calculateCol(index);
      let color;
      if(cell.class === 'dead'){
        color = '0,0,0';
      } else {
        if(cell.class === 'alive'){
          color = '251,191,187';
        } else {
          color = '238,68,68';
        }
      }
      ctx.fillStyle = `rgb(${color})`;
      ctx.fillRect((col*13), (row*13), 12, 12);
    })
  }
  calculateCellID(x,y){
    const col = Math.floor(x/13);
    const row = Math.floor(y/13);
    return (this.props.res.width*row)+col
  }
  updateCellStatus(x,y){
    const id = this.calculateCellID(x,y);
    console.log(id);
    console.log(this.props.cells[id]);
    if(this.props.cells[id].status === 1){
      this.props.setDead(id);
    } else {
      this.props.setAlive(id);
    }
  }
  componentDidMount(){
    this.props.generateCells();
    this.findCanvas();
    canvas.addEventListener('click', (event) => {
      console.log(event);
      this.updateCellStatus(event.layerX, event.layerY);
    }, false)
  }
  render(){
    return(
      <Row center="xs">
        <Col className='cell-grid-box'>
          <canvas className='cell-grid-canvas' ref="myCanvas" />
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    generateCells,
    stepState,
    setAlive,
    setDead
    },dispatch);
}

function mapStateToProps({cells, res, generation}){
  return {
    cells: cells,
    res: res,
    generation
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(cellGrid);
