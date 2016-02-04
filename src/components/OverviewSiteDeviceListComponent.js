'use strict';

import {Iterable, fromJS} from 'immutable';

require('styles/components//OverviewSiteDeviceList.less');

import createOverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

const resolve = devices => {
  const defaultDevices = fromJS({
    'DESKTOP': 0,
    'MOBILE': 0,
    'TABLET': 0
  });
  return Iterable(defaultDevices.mergeDeep(devices.fromEntrySeq()).entries());
};

export default React => {
  const OverviewSiteDeviceList = ({devices}) => {
    const OverviewSiteDeviceItem = createOverviewSiteDeviceItem(React);

    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {resolve(devices).map((device, key) => {
            const name = device[0];
            const activeUsers = parseFloat(device[1]);
            return (
              <OverviewSiteDeviceItem
                key={key}
                name={name}
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
