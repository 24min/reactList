/*
 * @Author: 24min
 * @Date: 2020-04-06 14:16:28
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-06 14:47:51
 * @Description: file content
 */
import React from 'react';
import secondHead from '../../action/testAction'
import { connect } from 'react-redux';
class Bus extends React.PureComponent {

    componentDidMount() {
        // 触发action操作
        this.props.secondHead('bus触发action');
      }
    render() {
        return (
            <h1 className="home-header">我是Bus组件</h1>
        )

    }
}

const mapStateToProps = state => ({
    secondHeader: state.test.secondHeader,
  })
  export default connect(mapStateToProps, { secondHead })(Bus)