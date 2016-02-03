'use strict';

import React from 'react';
import Immutable from 'immutable';

require('styles/components//OverviewSiteDeviceList.less');

import OverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

const resolve = devices => {
  const defaultDevices = Immutable.fromJS([
    ['DESKTOP', 0],
    ['MOBILE', 0],
    ['TABLET', 0]
  ]);
  return defaultDevices.mergeDeep(devices);
};

class OverviewSiteDeviceListComponent extends React.Component {
  render() {
    const devices = resolve(this.props.devices);
    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {devices.map((device, key) => {
            return (
              <OverviewSiteDeviceItem device={device} key={key}/>
            )
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
