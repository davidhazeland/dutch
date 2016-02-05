require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import createHeader from './HeaderComponent';
import createNavigation from './NavigationComponent';
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
    const Header = createHeader(React);
    const Navigation = createNavigation(React);

    const authorized = this.props.Google.get('authorized') && this.props.Facebook.get('authorized');
    const content = authorized ? this.renderContent() : null;
    return (
      <div className="Main">
        <Header {...this.props}/>
        <Navigation/>
        {content}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
