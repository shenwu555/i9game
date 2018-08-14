import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';//缓存assets
import 'antd-mobile/dist/antd-mobile.css';

import router from "./Router"; //引入路由模块

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
