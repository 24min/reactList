/*
 * @Author: 24min
 * @Date: 2020-04-07 18:28:16
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-07 22:34:44
 * @Description: 登录
 */
import React from 'react'
import './login.css'
import { Form, Input, Button } from 'antd';
export default class Login extends React.PureComponent {
    login() {
        this.props.history.push('/home/sandwiches')
    }
    render() {
        return (
            <div className="login">
                <div className="login-container">
                    <Form name="basic" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
                        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名！' }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 4, offset: 6 }}>
                            <Button type="primary" htmlType="submit" onClick={this.login.bind(this)}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}