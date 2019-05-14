import React, { Component } from 'react';

class MainPage extends Component {
  state = {
    name: 'gentacle',
    value: '0'
  };

  render(){
    return(
      <div>
      <h1>gentacle 포트폴리오 페이지입니다.</h1>
      <ul>
      <li>리액트로 만드는중</li>
      <li>웹팩 적용해봄</li>
      <li>배포 안되는거 이유를 모르겠네</li>
      <li>npm 날리고 재설하니까 된다. 뭐냐</li>
      </ul>

      <button onClick={()=>(this.setState({value:this.state.value + '1'}))}>{this.state.value}</button>
      </div>
    )
  }

}

export default MainPage;