'use strict';

import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//OverviewSiteDeviceList.less');

import createOverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

export default React => {
  const OverviewSiteDeviceList = ({devices}) => {
    const OverviewSiteDeviceItem = createOverviewSiteDeviceItem(React);

    const siteDevices = devices.map((device, key) => {
      const deviceName = device.get(0);
      const activeUsers = parseFloat(device.get(1));
      return (
        <OverviewSiteDeviceItem
          key={key}
          name={deviceName}
          activeUsers={activeUsers}/>
      );
    });

    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {siteDevices}
        </div>
      </div>
    );
  };

  OverviewSiteDeviceList.propTypes = {
    devices: ImmutablePropTypes.list.isRequired
  };

  return OverviewSiteDeviceList;
};
