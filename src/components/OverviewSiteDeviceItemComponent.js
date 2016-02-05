'use strict';

import cx from 'classnames';

require('styles/components//OverviewSiteDeviceItem.less');

export default React => {
  const {string, number} = React.PropTypes;

  const OverviewSiteDeviceItem = ({activeUsers, name}) => {
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
  };

  OverviewSiteDeviceItem.propTypes = {
    activeUsers: number.isRequired,
    name: string.isRequired
  };

  return OverviewSiteDeviceItem;
};
