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
class CommonComments extends React.Component{
  constructor(){
    super();
    this.state = {
      comments:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(){};

  render(){
    let {getFieldProps} = this.props.form;
    return(
      <div class="comment">
        <Row>
          <Col span={24}>
            <Form onSubit={this.handleSubmit}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initialValue:''})}>
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CommonComments = Form.create({})(CommonComments);
