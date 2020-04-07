/*
 * @Author: 24min
 * @Date: 2020-04-07 18:28:16
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 23:21:42
 * @Description: 登录
 */
import React from 'react'
import { Button } from 'antd';
// import { createStore } from 'redux'
// import reducer from '../../store/reducers/index'
// const store = createStore(reducer)
export default class Sandwiches extends React.PureComponent {
    changeLeft(){
        // store.dispatch({ type: 'HOME_COMMON' })
    }
    render() {
        return (
            <div>
                <h1>sandwiches.js
                {/* <Button type="primary" onClick={this.changeLeft.bind(this)}>Primary</Button> */}
                </h1>
            </div>
        )
    }
}