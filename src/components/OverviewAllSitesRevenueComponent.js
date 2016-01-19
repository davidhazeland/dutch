'use strict';

import React from 'react';

require('styles/components//OverviewAllSitesRevenue.less');

class OverviewAllSitesRevenueComponent extends React.Component {
  round(revenue) {
    return Math.round(revenue * 10) / 10;
  }

  render() {
    return (
      <div className="OverviewAllSitesRevenue">
        <div className="ui green small statistic">
          <div className="value">
            ${this.round(this.props.revenue)}
          </div>
          <div className="grey label">
            earnings
          </div>
        </div>
      </div>
    );
  }
}

OverviewAllSitesRevenueComponent.displayName = 'OverviewAllSitesRevenueComponent';

// Uncomment properties you need
// OverviewAllSitesRevenueComponent.propTypes = {};
// OverviewAllSitesRevenueComponent.defaultProps = {};

export default OverviewAllSitesRevenueComponent;
