import React from 'react';
import {Card} from 'antd';

export default class PCNewsDetailsBlock extends React.Component{
  componentDidMount(){
    console.log(this.props);
  }

  render(){
    return(
      <div>
        <Card title={this.props.NewsTitle} bordered={false}>{this.props.NewsDesc}</Card>
      </div>
    );
  }
}
