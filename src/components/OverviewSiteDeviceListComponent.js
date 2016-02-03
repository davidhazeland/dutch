'use strict';

import React from 'react';
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

class OverviewSiteDeviceListComponent extends React.Component {
  render() {
    const devices = resolve(this.props.devices);

    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {devices.map((device, key) => {
            return (
              <OverviewSiteDeviceItem key={key}
                                      device={device[0]}
                                      activeUsers={device[1]}/>
            );
          })}
        </div>
      </div>
    );
  }
}

OverviewSiteDeviceListComponent.displayName = 'OverviewSiteDeviceListComponent';

// Uncomment properties you need
// OverviewSiteDeviceListComponent.propTypes = {};
// OverviewSiteDeviceListComponent.defaultProps = {};

export default OverviewSiteDeviceListComponent;
