import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs,Carousel} from 'antd';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
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
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="头条" key="1">
            <div className="carousel">
              <Carousel {...settings}>
                <div><img src={img1} /></div>
                <div><img src={img2} /></div>
                <div><img src={img3} /></div>
              </Carousel>
            </div>
            <MobileList type="头条" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList type="社会" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList type="国内" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList type="国外" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList type="娱乐" />
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    );
  }
}
