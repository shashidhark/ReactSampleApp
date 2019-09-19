import React, { Component } from 'react';
import './App.scss'
import User from './User';

class App extends Component{
  constructor(props){
    super(props)
  }

  dataFromChild = (data) => {
    console.log("Data from Child:", data);
  }

  render(){
    return (
      <div>Hello!! Class based component.

        <User name="Shashi" onUpdate={this.dataFromChild}/>
      </div>
    )
  }
}

export default App;
