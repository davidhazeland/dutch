'use strict';

import React from 'react';

require('styles/components//OverviewSiteRevenue.less');

class OverviewSiteRevenueComponent extends React.Component {
  render() {
    return (
      <div className="OverviewSiteRevenue">
        <div className="ui mini green statistic">
          <div className="value">
            ${this.props.earning}
          </div>
          <div className="grey label">
            earnings
          </div>
        </div>
      </div>
    );
  }
}

OverviewSiteRevenueComponent.displayName = 'OverviewSiteRevenueComponent';

// Uncomment properties you need
// OverviewSiteRevenueComponent.propTypes = {};
// OverviewSiteRevenueComponent.defaultProps = {};

export default OverviewSiteRevenueComponent;
