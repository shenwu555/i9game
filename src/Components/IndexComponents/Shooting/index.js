import React,{Component} from "react";

import "./index.css";
import axios from "axios";
class Shooting extends Component{
	constructor(){
		super();
		this.state = {
			datalist:[]
		};
	}
	render(){
		return <div id="Shooting">
					{
						this.state.datalist.map(item=>
							<div key={item.gameId} className="all">
								<div className="title">
									<a className="one">
										<img src={require('./img/hh.png')} alt=""/>
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
		axios.post("/api/fetch?id=1534300150840",{"reqId":1534322906273,"service":"ngi.game.GameV3ServiceApi.GetTestList","size":10,"offset":0,"categoryId":7}).then(res=>{
			console.log(res.data)

			this.setState({
				datalist:res.data.data.list
			})
		})

	}
}

export default Shooting


