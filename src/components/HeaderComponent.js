'use strict';

import React from 'react';

require('styles//Header.less');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="ui secondary pointing menu">
          <a className="active item">
            Home
          </a>
          <a className="item">
            Messages
          </a>
          <a className="item">
            Friends
          </a>
          <div className="right menu">
            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
