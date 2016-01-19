'use strict';

import React from 'react';

require('styles/components//OverviewAllSitesActiveUsers.less');

class OverviewAllSitesActiveUsersComponent extends React.Component {
  render() {
    return (
      <div className="OverviewAllSitesActiveUsers">
        <div className="ui statistic">
          <div className="value">
            {this.props.activeUsers}
          </div>
          <div className="grey label">
            active users
          </div>
        </div>
      </div>
    );
  }
}

OverviewAllSitesActiveUsersComponent.displayName = 'OverviewAllSitesActiveUsersComponent';

// Uncomment properties you need
// OverviewAllSitesActiveUsersComponent.propTypes = {};
// OverviewAllSitesActiveUsersComponent.defaultProps = {};

export default OverviewAllSitesActiveUsersComponent;
