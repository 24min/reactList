/*
 * @Author: 24min
 * @Date: 2020-04-08 12:34:20
 * @LastEditors: 24min
 * @LastEditTime: 2020-04-08 21:06:40
 * @Description: file content
 */
import React from 'react'
import { PageHeader, Table, Button, Modal, Input } from 'antd'
import { connect } from 'react-redux'

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '索引',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
];
class Test extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShowDialog: false,
    }
    this.createParams={
      name:'',
      id:0,
      description:''
    }
  }
  /**打开对话框 */
  createList() {
    this.setState({
      isShowDialog: true
    })
  }
  handleOk() {
    this.props.createList({...this.createParams})
    this.setState({
      isShowDialog: false,
    });
  }
  handleCancel() {
    this.setState({
      isShowDialog: false,
    });
  }
  inputChange({target},type){
    this.createParams[type] = target.value
  }
  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="测试"
          subTitle="有列表有新建 数据存在redux中"
        />
        <Button onClick={this.createList.bind(this)}>创建</Button>
        {/* {this.props.dataList.map(item=>(
          <h3 key={item.id}>{item.name}</h3>
        ))} */}
        <Table columns={columns} dataSource={this.props.dataList} rowKey="name" />
        <Modal
          title="添加数据"
          visible={this.state.isShowDialog}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>
            <Input placeholder="请输入名称" onChange={(e)=>this.inputChange(e,'name')}/>
          </p>
          <p> <Input placeholder="请输入Id" onChange={(e)=>this.inputChange(e,'id')}/></p>
          <p> <Input placeholder="请输入描述" onChange={(e)=>this.inputChange(e,'description')}/></p>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    dataList: state.testReducer
  }
)
function mapDispatchToProps(dispatch) {
  console.log('22222222222222222222222222')
  return {
    createList: (data) => dispatch({ type: "CREATELIST", value: data})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)