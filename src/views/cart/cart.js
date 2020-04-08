/*
 * @Author: 24min
 * @Date: 2020-04-08 07:50:07
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 08:04:36
 * @Description: file content
 */

import React from 'react'
import {Button } from 'antd'
export default class Cart extends React.PureComponent {
    pushRouter(){
        console.log('this.props',this.props.store)
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <h1>Cart 测试</h1>
                <Button onClick={this.pushRouter.bind(this)}>路由点击Login</Button>
            </div>
        )
    }
}