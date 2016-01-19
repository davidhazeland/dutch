'use strict';

import React from 'react';

require('styles/components//OverviewSiteItem.less');

import OverviewSiteActiveUsers from './OverviewSiteActiveUsersComponent';
import OverviewSiteRevenue from './OverviewSiteRevenueComponent';
import OverviewSiteDeviceList from './OverviewSiteDeviceListComponent';

class OverviewSiteItemComponent extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="OverviewSiteItem ui segment">
        <div className="ui top attached label">{data.get('name')}</div>
        <div className="ui grid">
          <div className="ten wide column">
            <OverviewSiteActiveUsers activeUsers={data.get('totalDevices')}/>
          </div>
          <div className="six wide column">
            <OverviewSiteRevenue revenue={data.get('revenue')}/>
          </div>
          <div className="sixteen wide column">
            <OverviewSiteDeviceList devices={data.get('devices')}/>
          </div>
        </div>
      </div>
    );
  }
}

OverviewSiteItemComponent.displayName = 'OverviewSiteItemComponent';

// Uncomment properties you need
// OverviewSiteItemComponent.propTypes = {};
// OverviewSiteItemComponent.defaultProps = {};

export default OverviewSiteItemComponent;
