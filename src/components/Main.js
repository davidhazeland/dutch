require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Content from './ContentComponent';

import {authorize, load, signIn} from '../services/GoogleAPI';


class AppComponent extends React.Component {
  componentDidMount() {
    signIn().then(()=> {
      this.props.actions.AuthorizationSetState(true);
    });
  }

  onAuthorize() {
    authorize(false).then(load).then(()=> {
      this.props.actions.AuthorizationSetState(true);
    });
  }

  render() {
    return (
      <div className="App">
        <Header authorization={this.props.Authorization}
                onAuthorize={()=> this.onAuthorize()}/>
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
