import React,{Component} from "react";

import "./index.css";
import axios from "axios";
class Plan extends Component{
	constructor(){
		super();
		this.state = {
			datalist:[]
		};
	}
	render(){
		return <div id="fang">
				{
					this.state.datalist.map(item=><div className="box2" key={item.testId}>
			  
			  		<img className="logo"  src={require('./img/hh.png')} alt=""/>
			  		<p className="er1">{Math.ceil((new Date -item.publishTime)/1000/60/60/24)+"天前发布"}</p>
			  		<div className="yu"><a>关注</a></div>
			  		<div className="ad"><img src={item.bannerImage}alt=""/></div>
			  		<p className="er">{item.gameName}</p>
			  		<div className="biao">{item. gameTypes.length<2?<div className="MM">{item.gameTypes[0]}</div>:<div><div className="MM">{item.gameTypes[0]}</div>
			  		<div className="BB">{item.gameTypes[1]}</div>
			  		</div>}</div>
			  		<div className="bian"></div>


			  			
			  </div>)

			}
			  
			
		</div>
	}

	componentDidMount(){
		axios.post("/api/fetch?id=1534300150840",{"reqId":1534322906273,"service":"ngi.game.GameV3ServiceApi.GetTestList","size":10,"offset":0,"categoryId":7}).then(res=>{
			console.log(res.data)

			this.setState({
				datalist:res.data.data.list
			})
		})

	}
}

export default Plan


