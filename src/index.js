/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 20:05:38
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RouterView from './router/router'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,useHistory  } from 'react-router-dom'   
ReactDOM.render(
  <Router history={useHistory}>
    <RouterView></RouterView>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()
