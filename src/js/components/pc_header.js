import React from 'react';
import {Row,Col} from 'antd';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { Menu, Icon,Input,Button,Checkbox,Tabs,message,Form,Modal } from 'antd';
import HeaderCss from './css/pc_header.css';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{

  constructor(){
    super();
    this.state = {
      current : 'top',
      modalVisible:false,
      action : 'login',
      hasLogined :false,
      userNickName : '',
      userid : 0
    };
  };

  setModalVisible(value){
    this.setState({
      modalVisible:value
    });
  };

  handleClick(e){
    if(e.keyPath[0]=="register"){
      this.setState({current:'register'});
      this.setModalVisible(true);
    }
    else{
      {
        this.setState({current:e.key});
      }
    }
  };

  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method : 'GET'
    };
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch("http://127.0.0.1:3030/")
        .then(res => res.json())
        .then(json=> this.setState({userNickName : json.username,userid : json.userid}));

        message.success("请求成功！");
        this.setModalVisible(false);
      }
    });
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key="logout" class="register">
    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
    &nbsp;&nbsp;
    <Link target="_blank">
      <Button type="dashed" htmlType="button">个人中心</Button>
    </Link>
    &nbsp;&nbsp;
    <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>
    :
    <Menu.Item key="register" class="register">
      <Icon type="appstore"/>注册/登录
    </Menu.Item>;

    return(
      <header className="header" style={HeaderCss}>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" />
                头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />
                社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />
                国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore" />
                国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />
                娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore" />
                体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore" />
                科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />
                时尚
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
            <Tabs type="card">
              <TabPane tab="注册" key="2">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                  <FormItem>
                    {getFieldDecorator('userName', {
                      rules: [{ required: true, message: '请输入你的账号' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入你的密码' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('comfirmpassword', {
                      rules: [{ required: true, message: '请再次输入你的密码' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </Form>
              </TabPane>
            </Tabs>
            </Modal>

          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader = Form.create({})(PCHeader);
