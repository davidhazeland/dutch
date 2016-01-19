'use strict';

import React from 'react';
import { Link } from 'react-router';

import cx from 'classnames';

require('styles/components//Header.less');

import logo from '../images/logo.png';

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

    const authGoogleText = this.props.Google.get('isLogining') ? 'Logining' : 'Authorize';

    return (
      <div className="Header">
        <div className="ui secondary pointing menu">
          <div className="header item">
            <img className="logo" src={logo} alt=""/>
            Dutch Project
          </div>
          <Link to="/overview" className="item active blue">Home</Link>
          <Link to="#" className="item">Reporting</Link>
          <div className="right menu">
            <button className={authGoogleClass}
                    onClick={() => this.props.onAuthorizeGoogle()}>
              {authGoogleText} Google
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
