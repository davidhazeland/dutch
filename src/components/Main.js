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
  }

  render() {
    return (
      <div className="Main">
        <Header Google={this.props.Google}
                onGoogleAuthorize={() => this.props.actions.GoogleAuthorize()}
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
