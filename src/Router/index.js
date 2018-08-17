import {
	BrowserRouter as Router, //as es6 导出模块重新命名
	Route, //每个单独的路径
	Redirect,//重定向
	Switch // 匹配遇到的第一个 
 }	from "react-router-dom";
// export {HashRouter ,Route}
import React from "react";//jsx 语法依赖react

import App from "../App";
import Home from "../Components/Home";
import Film from "../Components/Film";
import Card from "../Components/Card";
import Download from "../Components/Download"
import Wechat from "../Components/Wechat"
import Index from "../Components/Index"
import User from "../Components/User"
import Login from "../Components/Login"
import Register from "../Components/Register"
import fzscjh from "../Components/fzscjh"
import Strategy from "../Components/IndexComponents/Strategy"

const router = ( 
	<Router>
			<App>
			   <Switch>
				<Route path="/home" component={Home}/>
				<Route path="/film" component ={Film}/>
				<Route path="/card" component={Card}/>
				<Route path="/download" component={Download}/>
				<Route path="/wechat" component={Wechat}/>
				<Route path="/index" component={Index}/>
				<Route path="/user" component={User}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="#" component={Strategy}/>
				
				
				<Route path="/fzscjh/:kerwinid" component={fzscjh}/>
				


				<Redirect from ="*" to="/index"/>
				</Switch>
			</App>
	</Router>	
)
export default router;

// vue mode (hash , history)
// react mode( HashRouter , BrowserRouter)