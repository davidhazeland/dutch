'use strict';

require('styles/components//OverviewSiteDeviceList.less');

import createOverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

export default React => {
  const OverviewSiteDeviceList = ({devices}) => {
    const OverviewSiteDeviceItem = createOverviewSiteDeviceItem(React);

    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {devices.map((device, key) => {
            const deviceName = device.get(0);
            const activeUsers = parseFloat(device.get(1));
            return (
              <OverviewSiteDeviceItem
                key={key}
                name={deviceName}
                activeUsers={activeUsers}/>
            );
          })}
        </div>
      </div>
    );
  };

  OverviewSiteDeviceList.propTypes = {

  };

  return OverviewSiteDeviceList;
};
