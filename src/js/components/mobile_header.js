import React from 'react';
import img from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { Menu, Icon,Input,Button,Checkbox,Tabs,message,Form,Modal } from 'antd';
import HeaderCss from './css/pc_header.css';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component{

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

  login(){
    this.setModalVisible(true);
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined?
    <Link>
      <Icon type="inbox" />
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)} />;

    return(
      <div id="mobileheader">
        <header className="header">
          <img src={img} alt="logo"/>
          <span>ReactNews</span>
          {userShow}
        </header>


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
      </div>
    );
  }
}

export default MobileHeader = Form.create({})(MobileHeader);
