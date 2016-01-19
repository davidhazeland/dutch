'use strict';

import React from 'react';

require('styles/components//OverviewSiteDeviceList.less');

import OverviewSiteDeviceItem from './OverviewSiteDeviceItemComponent';

class OverviewSiteDeviceListComponent extends React.Component {
  render() {
    return (
      <div className="OverviewSiteDeviceList">
        <div className="ui mini grey statistics">
          {this.props.devices.map((device, key) => {
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
