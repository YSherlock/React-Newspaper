import React from 'react';
import {Router,Route,Link} from 'react-router-dom';
import {Card} from 'antd';

export default class PCNewsBlock extends React.Component{
  constructor(){
    super();
    this.state = {news : ""};
  }

  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };

    fetch("http://route.showapi.com/109-35?showapi_sign=97d030c09a6f4959a340a5f9b122c24f&maxResult=14&showapi_appid=56634&channelId=&channelName=" + this.props.type,myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news : json.showapi_res_body.pagebean.contentlist}));
  }

  render(){
    const {news} = this.state;
    const newsList = news.length
    ?
    news.map((newsItem,index)=>(
      <li key={index}>
        <Link to={`details/${newsItem.id}`} target="_blank">
          {newsItem.title}
        </Link>
      </li>
    ))
    :
    "没有加载到任何新闻"

    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  }
}
