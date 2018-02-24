import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from 'antd';

export default class MobileList extends React.Component{
  constructor(){
    super();
    this.state = {news : ""};
  }

  componentWillMount(){
    var myFetchOptions={
      method:'GET'
    };

    fetch("http://route.showapi.com/109-35?showapi_sign=97d030c09a6f4959a340a5f9b122c24f&showapi_appid=56634&channelId=&channelName=" + this.props.type,myFetchOptions)
    .then(response=>response.json())
    .then(json=>this.setState({news : json.showapi_res_body.pagebean.contentlist}));
  }

  render(){
    const {news} = this.state;
    const newsList = news.length
    ?
    news.map((newsItem,index)=>(
      <Link to={`/details/${newsItem.id}`} >
      <section key={index} className="m_artical list-item special_section clearfix">
        <div className="m_artical_img">
          <img src={newsItem.imageurls[0]?newsItem.imageurls[0].url:""} alt={newsItem.title} />
        </div>
        <div className="m_artical_info">
          <div className="m_artical_title">
            <span>{newsItem.title}</span>
          </div>
          <div className="m_artical_desc clearfix">
            <div className="m_artical_desc_l">
              <span className="m_artical_channel">{newsItem.channelName}</span>
              <span className="m_artical_time">{newsItem.pubDate}</span>
            </div>
          </div>
        </div>
      </section>
      </Link>
    ))
    :
    "没有加载到任何新闻"

    return(
      <div>
        <Row>
          <Col span={24}>
            {newsList}
          </Col>
        </Row>
      </div>
    );
  }
}
