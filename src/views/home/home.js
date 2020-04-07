/*
 * @Author: 24min
 * @Date: 2020-04-07 18:37:39
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 22:39:05
 * @Description: 系统主组件 应该先定义头部组件的路由  然后子组件的路由通过子组件内定义
 */
import React from 'react'
import './home.css'
import { Menu, Col, Row } from 'antd'
import Sandwiches from '../sandwiches/sandwiches'
import HomeFirst from '../homeFirst/homeFirst'
import Login from '../login/login'
import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
const menuList = [
    {
        name: "导航1",
        name_en: "nav1",
        route: '/home/sandwiches',
    },
    {
        name: "导航1",
        name_en: "nav2",
        // route: '/login',
        route: '/home/first',
    },

]

class Home extends React.PureComponent {
    componentDidMount() {
        console.log('this', this.props)
        this.props.history.push('/home/sandwiches')
        // this.props.history.push('/home/sandwiches')

    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Menu theme="dark" defaultSelectedKeys={['nav1']} className="left-nav">
                            {menuList.map(item => (
                                <Menu.Item key={item.name_en} ><Link to={item.route}>{item.name}</Link></Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                    <Col span={19} offset={1}>
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/home/sandwiches" component={Sandwiches}></Route>
                            <Route path="/home/first" component={HomeFirst}></Route>
                            <Redirect to="/home"></Redirect>
                        </Switch>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home