'use strict';

import React from 'react';

require('styles/components//OverviewSiteActiveUsers.less');

class OverviewSiteActiveUsersComponent extends React.Component {
  render() {
    return (
      <div className="OverviewSiteActiveUsers">
        <div className="ui small grey statistic">
          <div className="value">
            {this.props.activeUsers}
          </div>
          <div className="label">
            active users
          </div>
        </div>
      </div>
    );
  }
}

OverviewSiteActiveUsersComponent.displayName = 'OverviewSiteActiveUsersComponent';

// Uncomment properties you need
// OverviewSiteActiveUsersComponent.propTypes = {};
// OverviewSiteActiveUsersComponent.defaultProps = {};

export default OverviewSiteActiveUsersComponent;
