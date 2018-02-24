import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'antd';

export default class PCNewsImageBlock extends React.Component{
  constructor(){
    super();
    this.state = {news : ""};
  }

  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };

    fetch("http://route.showapi.com/109-35?showapi_sign=97d030c09a6f4959a340a5f9b122c24f&showapi_appid=56634&channelId=&maxResult=6&channelName=" + this.props.type,myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news : json.showapi_res_body.pagebean.contentlist}));
  }

  render(){
    const styleImage = {
      display:"block",
      width:this.props.imageWidth,
      height:"70px"
    };

    const styleH3 = {
      width:this.props.imageWidth,
      whiteSpace:"nowrap",
      overflow:"hidden",
      textOverflow:"ellipsis"
    }

    const {news} = this.state;
    const newsList = news.length
    ?
    news.map((newsItem,index)=>(
      <div key={index} className="imageblock">
        <div className="custom-image">
          <img src={newsItem.imageurls[0]?newsItem.imageurls[0].url:""} alt="" style={styleImage} />
        </div>
        <div className="custom-card">
          <h3 style={styleH3}>{newsItem.title}</h3>
          <p>{newsItem.channelName}</p>
        </div>
      </div>
    ))
    :
    "没有加载到任何新闻";

    return(
      <div className="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
          {newsList}
        </Card>
      </div>
    );
  }
}
