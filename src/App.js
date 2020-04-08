/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 08:06:11
 * @Description: file content
 */
import React from 'react';
import './App.css';
import Home from './views/home/home'
import Cart from './views/cart/cart'
import Login from './views/login/login'
import { Menu, Row, Col } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
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
}]
class App extends React.PureComponent {
  componentDidMount(){
    console.log('ssss',this.props)
  }
  render() {
    return (
      <Router history={useHistory}>
        <div>
          <Row>
            <Col span={4}>
              <Menu defaultSelectedKeys={['home']}>
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
const mapStateToProps = state => ({
  secondHeader: state.test.secondHeader,
})
export default App
// function Tacos({ routes }) {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <ul>
//         <li>
//           <Link to="/tacos/bus">Bus</Link>
//         </li>
//         <li>
//           <Link to="/tacos/cart">Cart</Link>
//         </li>
//       </ul>

//       <Switch>
//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </Switch>
//     </div>
//   );
// }
