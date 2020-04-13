/*
 * @Author: 24min
 * @Date: 2020-04-13 20:52:45
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-13 21:20:59
 * @Description: file content
 */
import React from 'react'
import { PageHeader,Divider } from 'antd'
import FanButton from '../../components/FanButton/FanButton'
export default class MyComponents extends React.PureComponent {
    fanbutton(){
        console.log('点击事件')
    }
    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="我的组件"
                    subTitle="这个页面存放我写的一些组件"
                />
                <FanButton onClick={this.fanbutton.bind(this)}><p>sss</p></FanButton>
                <Divider />
            </div>
        )
    }
}