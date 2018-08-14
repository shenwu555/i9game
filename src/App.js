import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
class App extends Component {
  constructor(){
    super();
    this.state = {
      isShow:false
    }
  }

  render() {
    return (
      <div className="App">
         
         <Navbar mycallback={
          ()=>{
            this.setState({
              isShow:!this.state.isShow
            })
          }
         }/>

         <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
         {
          this.state.isShow?
          <Sidebar mycallback={()=>{this.setState({isShow:!this.state.isShow})}}/>:null
         }
         </ReactCSSTransitionGroup>


         {
          this.props.children 
          //路由容器 
         }
      </div>
    );
  }
}

export default App;
