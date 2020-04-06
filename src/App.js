/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 14:41:17
 * @Description: file content
 */
import React from 'react';
import './App.css';
import Home from './views/home/home'
import Bus from './views/home/Bus'
import { Menu } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import secondHead  from "./action/testAction"
/**routes可以单独抽出 做一个公共路由配置的地方 在feature-v0.1上 可以重新考虑下 这边的架构处理*/
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/Home",
    component: Home,
    routes: [
      {
        path: "/home/bus",
        component: Bus
      },
      {
        path: "/home/cart",
        component: Cart
      }
    ]
  }
];
/**bus和cart 是一个具体的页面 */
// function Bus() {
//   return <h3>我是home/Bus组件</h3>;
// }

function Cart() {
  return <h3>我是home/cart</h3>;
}
function NoMatch() {
  return <h3>没有找到！！</h3>
}

class App extends React.PureComponent {
  componentDidMount() {
    // 触发action操作
    this.props.secondHead();
  }
  render() {
    return (
      <Router>
        <div>
          {/* 定义一个头部数组 用map循环输出导航菜单 会更好 */}
          <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home">
              <MailOutlined />
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="app" >
              <AppstoreOutlined />
              <Link to="/sandwiches">{this.props.secondHeader}</Link>
            </Menu.Item>
          </Menu>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>)
  }
};

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}
const mapStateToProps = state => ({
  secondHeader: state.test.secondHeader,
})
export default connect(mapStateToProps, { secondHead })(App)
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
