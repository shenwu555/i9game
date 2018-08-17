import React,{Component} from "react";

import "./index.css";
class Wechat extends Component{

	render(){
		return <div id="wechat">
			<h1>第一时间参与游戏测试</h1>
			<div className="center">
				<p>01. 关注微信公众号: 九游iOS</p>
				<img src={require('./photo/pic.jpg')} alt=""/>
			</div>
			<div className = "bottom">
				<p>02. 加入官方QQ群</p>
				<div className="qq">
					<div className="image">
						<img src={require('./photo/pic2.jpg')} alt=""/>
					</div>
					<span>9966293</span> 
				</div>
			</div>
			
			
		</div>
	}
}

export default Wechat