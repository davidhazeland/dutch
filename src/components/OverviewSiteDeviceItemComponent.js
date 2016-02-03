'use strict';

import React from 'react';
import cx from 'classnames';

require('styles/components//OverviewSiteDeviceItem.less');

class OverviewSiteDeviceItemComponent extends React.Component {
  render() {
    const labelClass = cx('label', name.toLowerCase());

    return (
      <div className="OverviewSiteDeviceItem statistic">
        <div className="value">
          {this.props.activeUsers}
        </div>
        <div className={labelClass}>
          {this.props.device}
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
