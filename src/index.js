import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from "./App";
import store from './redux/store'
// 同意不同浏览器初始样式
import 'normalize.css/normalize.css'
import './index.less'


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)