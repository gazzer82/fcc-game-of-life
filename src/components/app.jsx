import React, { Component } from 'react';
import Grid from '../containers/grid';
import LowerButtons from '../containers/lower_buttons';

export default class App extends Component {
  render(){
    return(
      <div>
        <Grid />
        <LowerButtons />
      </div>
    );
  }
}
