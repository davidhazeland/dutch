'use strict';

import React from 'react';
import cx from 'classnames';

require('styles/components//OverviewSiteDeviceItem.less');

class OverviewSiteDeviceItemComponent extends React.Component {
  render() {
    const name = this.props.device.get(0);
    const activeUsers = this.props.device.get(1);

    const labelClass = cx('label', name.toLowerCase());

    return (
      <div className="OverviewSiteDeviceItem statistic">
        <div className="value">
          {activeUsers}
        </div>
        <div className={labelClass}>
          {name}
        </div>
      </div>
    );
  }
}

OverviewSiteDeviceItemComponent.displayName = 'OverviewSiteDeviceItemComponent';

// Uncomment properties you need
// OverviewSiteDeviceItemComponent.propTypes = {};
// OverviewSiteDeviceItemComponent.defaultProps = {};

export default OverviewSiteDeviceItemComponent;
