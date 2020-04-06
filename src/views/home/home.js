/*
 * @Author: 24min
 * @Date: 2020-04-01 20:06:26
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 14:16:09
 * @Description: file content
 */
import React from 'react';
import './home.css'
import { Menu, Row, Col } from 'antd'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        const { routes } = props
        this.routes = routes
        console.log('props', props)
    }
    render() {
        console.log('sss', this.routes)
        console.log('sss', this.props)
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Menu defaultSelectedKeys={['bus']}>
                            <Menu.Item key="bus">
                                <Link to="/home/bus">bus</Link>
                            </Menu.Item>
                            <Menu.Item key="Cart" >
                                <Link to="/home/Cart">Cart</Link>
                            </Menu.Item>
                        </Menu>
                        {/* 左导航 */}
                    </Col>
                    <Col span={18}>
                        <Switch>
                            {this.routes.map((route, index) => (
                                <Route path={route.path} key={index} component={route.component}></Route>
                            ))}
                        </Switch>
                    </Col>
                </Row>

            </div>
        )

    }
}