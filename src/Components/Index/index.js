import React,{Component} from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';

import Recommend from "../IndexComponents/Recommend";
import Role from "../IndexComponents/Role";
import Shooting from "../IndexComponents/Shooting";
import Strategy from "../IndexComponents/Strategy";


import "./index.css";



class Index extends Component{
	
	constructor(){
	 super();

	 this.state = {
	 	which:"推荐"
	 }
	}
	render(){

		const tabs = [
		      { title: '推荐' },
		      { title: '射击' },
		      { title: '角色' },
		      { title: '策略' }
		    ];
		return <div id="index">
			
				<WhiteSpace />
				       <Tabs  tabs={tabs} onChange={(a)=>{
							this.setState({
								which:a.title
							})
				       }} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
				        	{this.which()}
				       </Tabs>
				<WhiteSpace />

		</div>
	}


	which(){

		switch(this.state.which){

			case "推荐":
				return <Recommend/>;
			case "射击":
				return <Shooting/>;
			case "角色":
			    return <Role/>;
		    case "策略":
		        return <Strategy/>

		}
	}

}

export default Index