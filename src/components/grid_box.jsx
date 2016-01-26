import React, {Component} from 'react';

export default class GridBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'empty'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    const status = (this.state.status === 'cell-alive' || this.state.status === 'cell-old') ? 'empty' : 'cell-alive'
    this.setState({
      status: status
    });
  }
  render(){
    return (
      <div className={'grid-box ' + this.props.widthClass}><div onClick={this.clickHandler} className={'grid-box-inner ' + this.state.status}></div></div>
    )
  }
}
