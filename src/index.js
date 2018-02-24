import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,BrowserRouter,Link} from 'react-router-dom'
import PCIndex from './js/components/pc_index';
import PCNewsDetails from './js/components/pc_news_details';
import MobileIndex from './js/components/mobile_index';
import MobileNewsDetails from './js/components/mobile_news_details';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
//import { BrowserRouter as Router,
  // Route,
  // Link} from 'react-router-dom';

class Index extends React.Component{
    render(){
      return(
        <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <BrowserRouter>
              <div>
              <Route path="/" component={PCIndex} exact></Route>
              <Route path="/details/:uniquecode" component={PCNewsDetails}></Route>
              </div>
            </BrowserRouter>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <BrowserRouter>
              <div>
              <Route path="/" component={MobileIndex} exact></Route>
              <Route path="/details/:uniquecode" component={MobileNewsDetails}></Route>
              </div>
            </BrowserRouter>
          </MediaQuery>
        </div>
      );
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
