'use strict';

import React from 'react';
import { Link } from 'react-router';

require('styles/components//Header.less');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="ui secondary pointing menu">
          <a href="/" className="active orange item">
            Home
          </a>
          <Link to="/page" className="item">Page</Link>
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
