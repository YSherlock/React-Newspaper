import React from 'react';
import {Row,Col,BackTop} from 'antd';
import {Router,Route,Link,BrowserRouter} from 'react-router-dom';
import {Tabs,Carousel} from 'antd';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
  render(){
    const settings = {
      dots : true,
      infinite: true,
      speed : 500,
      slideToShow:1,
      autoplay:true
    }

    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={img1} /></div>
                  <div><img src={img2} /></div>
                  <div><img src={img3} /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock type="国际" width="400px" cartTitle="国际头条" imageWidth="90px" />
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="科技" key="1">
              <BrowserRouter>
                <PCNewsBlock type="科技" />
              </BrowserRouter>
              </TabPane>
              <TabPane tab="国内" key="2">
              <BrowserRouter>
                <PCNewsBlock type="国内" />
              </BrowserRouter>
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock type="教育" width="100%" cartTitle="教育新闻" imageWidth="90px" />
              <PCNewsImageBlock type="体育" width="100%" cartTitle="体育新闻" imageWidth="90px" />
            </div>
          </Col>
          <Col span={2}></Col>
          <BackTop/>
        </Row>
      </div>
    );
  }
}
