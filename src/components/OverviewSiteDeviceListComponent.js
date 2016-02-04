'use strict';

import {Iterable, fromJS} from 'immutable';

require('styles/components//OverviewSiteDeviceList.less');

import OverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

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
    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {resolve(devices).map((device, key) => {
            return (
              <OverviewSiteDeviceItem key={key}
                                      device={device[0]}
                                      activeUsers={device[1]}/>
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
