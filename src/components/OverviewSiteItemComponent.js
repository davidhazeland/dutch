'use strict';

import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//OverviewSiteItem.less');

import createOverviewSiteActiveUsers from './OverviewSiteActiveUsersComponent';
import createOverviewSiteEarnings from './OverviewSiteEarningsComponent';
import createOverviewSiteDeviceList from './OverviewSiteDeviceListComponent';

export default React => {
  const {string, any} = React.PropTypes;

  const OverviewSiteItem = ({data}) => {
    const OverviewSiteActiveUsers = createOverviewSiteActiveUsers(React);
    const OverviewSiteEarnings = createOverviewSiteEarnings(React);
    const OverviewSiteDeviceList = createOverviewSiteDeviceList(React);

    const name = data.get('name');
    const activeUsers = parseFloat(data.get('totalDevices'));
    const earnings = parseFloat(data.get('earnings'));
    const devices = data.get('devices');

    return (
      <div className="OverviewSiteItem ui segment">
        <div className="ui top attached label">{name}</div>
        <div className="ui grid">
          <div className="ten wide column">
            <OverviewSiteActiveUsers activeUsers={activeUsers}/>
          </div>
          <div className="six wide column">
            <OverviewSiteEarnings earnings={earnings}/>
          </div>
          <div className="sixteen wide column">
            <OverviewSiteDeviceList devices={devices}/>
          </div>
        </div>
      </div>
    )
  };

  OverviewSiteItem.propTypes = {
    data: ImmutablePropTypes.contains({
      name: string.isRequired,
      totalDevices: any.isRequired,
      earnings: any.isRequired
    })
  };

  return OverviewSiteItem;
};
