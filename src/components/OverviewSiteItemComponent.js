'use strict';

import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//OverviewSiteItem.less');

import OverviewSiteActiveUsers from './OverviewSiteActiveUsersComponent';
import OverviewSiteRevenue from './OverviewSiteEarningsComponent';
import OverviewSiteDeviceList from './OverviewSiteDeviceListComponent';

export default React => {
  const {any} = React.PropTypes;

  const OverviewSiteItem = ({data}) => {
    return (
      <div className="OverviewSiteItem ui segment">
        <div className="ui top attached label">{data.get('name')}</div>
        <div className="ui grid">
          <div className="ten wide column">
            <OverviewSiteActiveUsers activeUsers={data.get('totalDevices')}/>
          </div>
          <div className="six wide column">
            <OverviewSiteRevenue earning={data.get('earnings')}/>
          </div>
          <div className="sixteen wide column">
            <OverviewSiteDeviceList devices={data.get('devices')}/>
          </div>
        </div>
      </div>
    )
  };

  OverviewSiteItem.propTypes = {
    data: ImmutablePropTypes.contains({
      name: any.isRequired,
      totalDevices: any.isRequired,
      earning: any.isRequired,
      devices: any
    })
  }
};
