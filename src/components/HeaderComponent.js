'use strict';

import React from 'react';
import { Link } from 'react-router';

import cx from 'classnames';

require('styles/components//Header.less');

class HeaderComponent extends React.Component {
  render() {
    const authGoogleClass = cx({
      'Header-authButton ui item': true,
      'visible': !this.props.Google.get('authorized')
    });

    const authFacebookClass = cx({
      'Header-authButton ui item': true,
      'visible': !this.props.Facebook.get('authorized')
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
            <button className={authGoogleClass}
                    onClick={() => this.props.onAuthorizeGoogle()}>
              Authorize Google
            </button>
            <button className={authFacebookClass}
                    onClick={() => this.props.onAuthorizeFacebook()}>
              Login Facebook
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
