'use strict';

import cx from 'classnames';
import { Link } from 'react-router';
import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//Header.less');

import logo from '../images/logo.png';

export default React => {
  const {shape, func} = React.PropTypes;

  const Header = ({Google, Facebook, actions: {GoogleAuthorizeRequest}}) => {
    const authGoogleClass = cx('Header-authButton ui item', {
      'visible': !Google.get('authorized')
    });

    const authFacebookClass = cx('Header-authButton ui item', {
      'visible': !Facebook.get('authorized')
    });

    const authGoogleText = Google.get('isLogining') ? 'Logining' : 'Authorize';

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
                    onClick={() => GoogleAuthorizeRequest}>
              {authGoogleText} Google
            </button>
            <button className={authFacebookClass}
                    onClick={() => {}}>
              Login Facebook
            </button>
          </div>
        </div>
      </div>
    );
  };

  Header.propTypes = {
    Google: ImmutablePropTypes.map.isRequired,
    Facebook: ImmutablePropTypes.map.isRequired,
    actions: shape({
      GoogleAuthorizeRequest: func.isRequired
    })
  }
};
