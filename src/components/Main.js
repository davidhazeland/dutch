require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Content from './ContentComponent';

import {authorize, load, signIn} from '../gapi/OAuth';
import {get} from '../gapi/RealTimeReporting';
import {get as getFB} from '../fb/AdsManagement';

class AppComponent extends React.Component {
  componentDidMount() {
    signIn().then(()=> {
      this.props.actions.AuthorizationSetState(true);
      getFB();
    });
  }

  onAuthorize() {
    authorize(false).then(load).then(()=> {
      this.props.actions.AuthorizationSetState(true);
    });
  }

  onFacebookLogin() {
    //getFB();
  }

  render() {
    return (
      <div className="Main">
        <Header authorization={this.props.Authorization}
                onAuthorize={()=> this.onAuthorize()}
                onFacebookLogin={()=> this.onFacebookLogin()}
        />
        <Navigation/>
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
