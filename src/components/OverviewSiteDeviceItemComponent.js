'use strict';

import cx from 'classnames';

require('styles/components//OverviewSiteDeviceItem.less');

export default React => {
  const {string} = React.PropTypes;

  const OverviewSiteDeviceItem = ({activeUsers, device}) => {
    const labelClass = cx('label', name.toLowerCase());

    return (
      <div className="OverviewSiteDeviceItem statistic">
        <div className="value">
          {activeUsers}
        </div>
        <div className={labelClass}>
          {device}
        </div>
      </div>
    );
  };

  OverviewSiteDeviceItem.propTypes = {
    activeUsers: string.isRequired,
    device: string.isRequired
  };

  return OverviewSiteDeviceItem;
};
