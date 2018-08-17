import React,{Component} from "react";
import ReactDOM from "react-dom"

import { PullToRefresh, Button } from 'antd-mobile';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: ["111","222","333","444"]
    }), 0);
  }

  render() {
    return (<div id="user">
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
				data:["555","666","777",...this.state.data]
             });
          }, 1000);
        }}
      >
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 , }}>
            {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}


export default User