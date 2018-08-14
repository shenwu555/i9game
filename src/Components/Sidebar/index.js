import React,{Component} from "react";

import "./index.css";
import {NavLink} from "react-router-dom";
class Sidebar extends Component{

	render(){
		return <aside id="aside">
					<div className="Sidebarbox">
							<div className="Sidebarlogo">
								<img src={require('./photo/SidebarLogo.png')} alt=""/>
							</div>
							<div className="error" onClick={()=>{this.props.mycallback()}}>
								<img src={require('./photo/error.png')} alt=""/>
							</div>
							<div className="loginText">
							<NavLink to="/login" onClick={()=>{this.props.mycallback()}}>登录</NavLink>
							
							<span>&nbsp;/&nbsp;</span>

							<NavLink to="/register" onClick={()=>{this.props.mycallback()}}>注册</NavLink>

							</div>
							<ul className="SidebarNavBox">
								<li><NavLink to="/index" onClick={()=>{this.props.mycallback()}}>首页</NavLink></li>
								<li><NavLink to="/user" onClick={()=>{this.props.mycallback()}}>我的游戏</NavLink></li>
								<li><NavLink to="/download" onClick={()=>{this.props.mycallback()}}>下载九游 App</NavLink></li>
								<li><NavLink to="/wechat" onClick={()=>{this.props.mycallback()}}>参与游戏测试</NavLink></li>
							</ul>
					</div>
					<div className="aaa"></div>
			
		</aside>
	}
}

export default Sidebar