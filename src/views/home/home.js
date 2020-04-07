/*
 * @Author: 24min
 * @Date: 2020-04-07 18:37:39
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 23:29:25
 * @Description: 系统主组件 应该先定义头部组件的路由  然后子组件的路由通过子组件内定义
 */
import React from 'react'
import './home.css'
import { Menu, Col, Row,Button } from 'antd'
import Sandwiches from '../sandwiches/sandwiches'
import HomeFirst from '../homeFirst/homeFirst'
import Login from '../login/login'
import { createStore } from 'redux'
import homeCommonReducer from '../../store/reducers/homeCommonReducer'


import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
const store = createStore(homeCommonReducer)
const menuList = [
    {
        name: "antd",
        name_en: "nav1",
        route: '/home/antd',
    },
    {
        name: "common",
        name_en: "nav2",
        // route: '/login',
        route: '/home/common',
    },

]

class Home extends React.PureComponent {
    componentDidMount() {
        console.log('this',store.getState())
    }
    changeLeft(){
        console.log('store',store)
        store.dispatch({ type: 'HOME_COMMON' })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Menu theme="dark" defaultSelectedKeys={['nav1']} className="left-nav">
                            {menuList.map(item => (
                                <Menu.Item key={item.name_en} ><Link to={item.route}>{item.name}+{store.getState().homeCommon}</Link></Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col span={19} offset={1}>
                    <Button type="primary" onClick={this.changeLeft.bind(this)}>Primary</Button>
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/home/antd" component={Sandwiches}></Route>
                            <Route path="/home/common" component={HomeFirst}></Route>
                            <Redirect to="/login"></Redirect>
                        </Switch>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home