/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 22:38:24
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './views/home/home'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, useHistory, Route } from 'react-router-dom'
// const history = useHistory()
ReactDOM.render(
  <Router history={useHistory}>
    <Route path="/" component={Home}></Route>
    {/* <Home /> */}
    {/* <RouterView></RouterView> */}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()
