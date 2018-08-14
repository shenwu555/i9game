import React,{Component} from "react";

import "./index.css";
class Navbar extends Component{
	render(){
		return <nav id ="header">
			<a href="http://i.9game.cn/download/" className="one">
				<img src={require('./photo/download.png')} alt=""/>
			</a>
			<a href="http://i.9game.cn/download/" className="two">
				<img src={require('./photo/logo.png')} alt=""/>
			</a>
			<a href="#" className="three" onClick={()=>{
				this.props.mycallback()
			}}>
				<img src={require('./photo/menu.png')} alt=""/>
			</a>
		</nav>
	}

	}

export default Navbar