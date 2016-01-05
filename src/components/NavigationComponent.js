'use strict';

import React from 'react';

require('styles/components//Navigation.less');

class NavigationComponent extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="ui vertical menu">
          <div className="item">
            <div className="header">Products</div>
            <div className="menu">
              <a className="item">Enterprise</a>
              <a className="item">Consumer</a>
            </div>
          </div>
          <div className="item">
            <div className="header">CMS Solutions</div>
            <div className="menu">
              <a className="item">Rails</a>
              <a className="item">Python</a>
              <a className="item">PHP</a>
            </div>
          </div>
          <div className="item">
            <div className="header">Hosting</div>
            <div className="menu">
              <a className="item">Shared</a>
              <a className="item">Dedicated</a>
            </div>
          </div>
          <div className="item">
            <div className="header">Support</div>
            <div className="menu">
              <a className="item">E-mail Support</a>
              <a className="item">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NavigationComponent.displayName = 'NavigationComponent';

// Uncomment properties you need
// NavigationComponent.propTypes = {};
// NavigationComponent.defaultProps = {};

export default NavigationComponent;
