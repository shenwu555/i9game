import React,{Component} from "react";
import axios from "axios";

import "./index.css";
class Recommend extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[]
	  };
	}

	render(){
		return <div id="recommend">
			
				{
					this.state.datalist.map(item=>
						<div key={item.gameId} className="all">
							<div className="title">
								<a className="one">
									<img src={require('./photo/pic1.png')} alt=""/>
								</a>
								<a className="two">
									<span>{Math.ceil((new Date - item.publishTime)/1000/60/60/24)+"天前发布"}</span>
								</a>
								<a className="three">
									<span>预约</span>
								</a>
							</div>
							<a className="pic">
								<div className="ban">
									<img src={item.bannerImage} alt=""/>
								</div>
							
							<div className="last">
								<span className="game">{item.gameName}</span>
								
								<div className="label">
									<div>
									{
										item.gameTypes.length<2?
										<span className="lab">{item.gameTypes[0]}</span>:
										<span>
											<span className="lab">{item.gameTypes[0]}</span>
											<span className="lab aaa">{item.gameTypes[1]}</span>
										</span>
									}
									</div>
								</div>
							
							</div>
							</a>
							<div className="bor"></div>
						</div>
					)
				}
			
			
		</div>
	}
	componentDidMount(){
		axios.post("/api/fetch?id=1534300150840",{"reqId":1534300150840,"service":"ngi.game.GameV3ServiceApi.GetTestList","size":10,"offset":0,"categoryId":1}).then(res=>{
			console.log(res.data)
			this.setState({
				datalist:res.data.data.list
			})
		})
      
	}
}

export default Recommend

