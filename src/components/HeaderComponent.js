'use strict';

import React from 'react';
import { Link } from 'react-router';

import cx from 'classnames';

require('styles/components//Header.less');

class HeaderComponent extends React.Component {
  handleAuthorize() {
    this.props.onAuthorize();
  }

  render() {
    const authButtonClass = cx({
      'Header-authButton ui item': true,
      'visible': !this.props.authorization.get('authorized')
    });

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
            <button className={authButtonClass} onClick={e => this.handleAuthorize(e)}>
              Authorize
            </button>
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
