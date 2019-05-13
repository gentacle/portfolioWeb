import React, { Component } from 'react';

class MainPage extends Component {
  state = {
    name: 'gentacle',
    value: '0'
  };

  render(){
    return(
      <div>
      <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      </ul>

      <button onClick={()=>(this.setState({value:this.state.value + 1}))}>{this.state.value}</button>
      </div>
    )
  }

}

export default MainPage;