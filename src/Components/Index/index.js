import React,{Component} from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';


import "./index.css";
class Index extends Component{
		renderContent = tab =>
	    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
	      <p>Content of {tab.title}</p>
	    </div>);

	render(){

		const tabs = [
		      { title: '推荐' },
		      { title: '射击' },
		      { title: '角色' },
		      { title: '策略' }
		    ];
		return <div id="index">
			
				<WhiteSpace />
				       <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
				         {this.renderContent}
				       </Tabs>
				<WhiteSpace />

		</div>
	}
}

export default Index