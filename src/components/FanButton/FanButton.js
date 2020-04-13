/*
 * @Author: 24min
 * @Date: 2020-04-13 20:47:36
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-13 21:18:09
 * @Description: file content 采用div模拟 
 * 1.图标功能
 * 2.禁用功能
 * 3.分几种类型的按钮  比如一般的 只是图标的 等
 */
import React from 'react'
import './FanButton.css'
export default class FanButton extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fan-button" onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
}