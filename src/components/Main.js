require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Content from './ContentComponent';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.actions.GoogleSignIn();
    this.props.actions.FacebookLogin();
  }

  renderContent() {
    return (
      <Content>
        {this.props.children}
      </Content>
    );
  }

  render() {
    const authorized = this.props.Google.get('authorized') && this.props.Facebook.get('authorized');
    const content = authorized ? this.renderContent() : null;
    return (
      <div className="Main">
        <Header Google={this.props.Google}
                Facebook={this.props.Facebook}
                onAuthorizeGoogle={() => this.props.actions.GoogleAuthorize()}
                onAuthorizeFacebook={() => this.props.actions.FacebookAuthorize()}
        />
        <Navigation/>
        {content}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
