/*
 * @Author: 24min
 * @Date: 2020-04-08 07:50:07
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 12:08:44
 * @Description: file content
 */

import React from 'react'
import {Button } from 'antd'
import { connect } from 'react-redux'
 class Cart extends React.PureComponent {
    pushRouter(){
        console.log('this.props',this.props.onClick)
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <h1>Cart 测试</h1>
                <Button onClick={this.props.onIncreaseClick1}>redux修改Home.js中的值</Button>
                <Button onClick={this.pushRouter.bind(this)}>路由点击Login</Button>
            </div>
        )
    }
}
// const mapStateToProps = state => (
//     {
//       aa: state
//     }
//   )
function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick1: () => dispatch({type:"INCREMENT"})
    }
  }

export default connect('',mapDispatchToProps)(Cart)