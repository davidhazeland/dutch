require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import createContent from './ContentComponent';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.actions.GoogleLoginRequest();
    //this.props.actions.FacebookLogin();
  }

  renderContent() {
    const Content = createContent(React);
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
                onAuthorizeGoogle={() => this.props.actions.GoogleAuthorizeRequest()}
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
