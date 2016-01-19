'use strict';

import React from 'react';

require('styles/components//OverviewAllSitesRevenue.less');

class OverviewAllSitesRevenueComponent extends React.Component {
  render() {
    return (
      <div className="OverviewAllSitesRevenue">
        <div className="ui green small statistic">
          <div className="value">
            ${this.props.revenue}
          </div>
          <div className="grey label">
            revenue
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
