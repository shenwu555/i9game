import React,{Component} from "react";
import axios from "axios"
import ReactDOM from "react-dom"

import { PullToRefresh, Button } from 'antd-mobile';

import "./index.css";
// function genData() {
//   const dataArr = [];
//   for (let i = 0; i < 20; i++) {
//     dataArr.push(i);
//   }
//   return dataArr;
// }


class Role extends Component{
	constructor(props){
		super(props);
		this.state ={
			refreshing: false,
			down: true,
			height: document.documentElement.clientHeight,
			datalist:[],
			newdatalist:[]
		}
	}




	componentDidMount(){
		  const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
		  axios.post("/api/fetch?id=1534300150840",{"reqId":1534300150840,"service":"ngi.game.GameV3ServiceApi.GetTestList","size":10,"offset":0,"categoryId":1}).then(res=>{
		  			this.setState({
		  				datalist:res.data.data.list
		  			})
		  		})
		}




	render(){
		return (<div id="Role">

		<Button
		  style={{ marginBottom: 15 ,display: "none"}}
		  onClick={() => this.setState({ down: !this.state.down })}
		>
		  direction: {this.state.down ? 'down' : 'up'}
		</Button>

		      <PullToRefresh
		        damping={60}
		        ref={el => this.ptr = el}
		        style={{
		          height: this.state.height,
		          overflow: 'auto',
		        }}
		        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
		        direction={ 'up'}
		        refreshing={this.state.refreshing}
		        onRefresh={() => {
		          this.setState({ refreshing: true });
		          setTimeout(() => {
		            this.setState({ refreshing: false,
						newdatalist:["555","666","777",...this.state.datalist]
		             });
		          }, 1000);
		        }}
		      >



			
						{
							this.state.datalist.map(item=>
								<div key={item.testId} className="all">

									
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
										<a href="" className="pic">
										<div className="ban">
										<img src={item.bannerImage} className = "pic2" alt=""/></div>
										<div className="last"><div className = "game">{item.gameName}</div></div></a>
										<div className="bor"></div>
									</div>
								
							)
						}
	
		
				</PullToRefresh>
			
		</div>)

		     
	}
}

export default Role