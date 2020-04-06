/*
 * @Author: 24min
 * @Date: 2020-04-01 19:41:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 22:22:36
 * @Description: file content
 */
import React from 'react'
import RouterView from './router/router'
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>我是app组件</h1>
        <RouterView></RouterView>
      </div>
    )
  }
}