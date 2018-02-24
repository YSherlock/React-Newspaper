import React from 'react';
import {Row,Col,BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import PCNewsDetailsBlock from './pc_news_details_block';

export default class MobileNewsDetails extends React.Component{
  constructor(){
    super();
    this.state = {
      newsItem:''
    };
  };

  componentDidMount(){
    var myFetchOptions={
      method:'GET'
    };
    fetch("http://route.showapi.com/109-35?showapi_sign=97d030c09a6f4959a340a5f9b122c24f&showapi_appid=56634&id=" + this.props.match.params.uniquecode,myFetchOptions)
    .then(res=>res.json())
    .then(json=>{
      this.setState({newsItem:json.showapi_res_body.pagebean.contentlist[0]});
      document.title = this.state.newsItem.title + "- React News | React 驱动的新闻平台";
    })
  }

  render(){
    return(
      <div>
      <MobileHeader></MobileHeader>
        <Col span={24}>
          <PCNewsDetailsBlock NewsTitle={this.state.newsItem.title} NewsDesc={this.state.newsItem.desc}/>
        </Col>
      <MobileFooter></MobileFooter>
      <BackTop />
      </div>
    );
  }
}
