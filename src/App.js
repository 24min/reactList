/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 12:52:36
 * @Description: file content
 */
import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Home from './views/home/home'
import Cart from './views/cart/cart'
import Login from './views/login/login'
import Test from './views/test/test'
import { Menu, Row, Col,Button } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";

// function Cart() {
//   return <h3>我是home/cart</h3>;
// }
function NoMatch() {
  return <h3>没有找到！！</h3>
}
const AppRoute = {
  login: {
    path: '/login',
    component: Login
  },
  home: {
    path: '/home',
    component: Home
  },
  cart: {
    path: '/cart',
    component: Cart
  },
  test:{
    path:'/test',
    component:Test
  }
}

const navList = [{
  name: '导航1home',
  name_en: "home",
  route: "/home"
},
{
  name: '导航2cart',
  name_en: "cart",
  route: "/cart"
},
{
  name: 'Test',
  name_en: "test",
  route: "/test"
}]
class App extends React.PureComponent {
  componentDidMount() {
  }
  render() {
    console.log('this.context', this)
    return (
      <Router history={useHistory}>
        <div>
          <Row>
            <Col span={4}>
              <Menu defaultSelectedKeys={['home']} >
                {navList.map(item => (
                  <Menu.Item key={item.name_en}>
                    <Link to={item.route}>{
                      item.name
                    }</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Col>
            <Col span={19} offset={1}>
              <Switch>
                {/* <Route exact path="/home" component={Home}></Route>
                  <Route exact path="/cart" component={Cart}></Route> */}
                {Object.keys(AppRoute).map(key => {
                  let item = AppRoute[key];
                  return (<Route key={key} exact path={item.path} component={item.component} />)
                })}
                <Redirect to="/home"></Redirect>
              </Switch>
            </Col>
          </Row>
        </div>
      </Router>)
  }
};


function Sandwiches() {
  return <h2>Sandwiches</h2>;
}
const mapStateToProps = state => (
  {
    aa: state
  }
)

export default App
