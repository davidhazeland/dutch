require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import React from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import Content from './ContentComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Content/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
