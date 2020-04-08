/*
 * @Author: 24min
 * @Date: 2020-04-01 20:06:26
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 19:14:58
 * @Description: file content
 */
import React from 'react';
import './home.css'
import { connect } from 'react-redux'
import { Menu, Row, Col } from 'antd'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        // console.log()
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        Home<br />
                        redux中 INCREMENT的type的state：
                        <strong>{this.props.aa}</strong>
                    </Col>
                    <Col span={18}>
                    </Col>
                </Row>

            </div>
        )

    }
}

const mapStateToProps = state =>
    (
        {
            aa: state.cartReducer
        }
    )

export default connect(mapStateToProps)(Home)