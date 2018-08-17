import React,{Component} from "react";

import "./index.css";
class Login extends Component{

	render(){
		return <div id="login">
		<div className="main">
			<header>
				<span>手机登录 无需注册</span>
				<div className="back"></div>
			</header>
			<div className="content">
				<form action="https://api.open.uc.cn/cas/login/commit?login_type=mobile&uc_param_str=einisiosntwilanwdnfrvecpdsdd">
					<p className="line">
						<span className="user-icon"></span>
						<input className="tel" type="tel" placeholder="手机号" maxLength="11"/>
					</p>
					<p className="line">
						<span className="code-icon"></span>
						<input type="tel" className="tel" maxLength="6" placeholder="短信验证码"/>
						<span className="send-sms">
							<a className="color-blue">获取短信验证码</a>
						</span>
					</p>
					<div className="login">
						<input type="button" value="登录"/>	
					</div>
					<div className="tips">
						<p className="left">
							<a href="">账号登录</a>
						</p>
					</div>
				</form>
				<div id="third">
					<div className="cooper">
						<p className="title">
							<span>其他账号登录</span>
						</p>
						<div className="list">
							<a className="one" href=""></a>
							<a className="two" href=""></a>
							<a className="three" href=""></a>
						</div>
					</div>
				</div>
			</div>
		</div>	
		</div>
	}
}

export default Login