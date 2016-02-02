'use strict';

import React from 'react';

require('styles/components//OverviewAllSites.less');

import OverviewAllSitesActiveUsers from './OverviewAllSitesActiveUsersComponent'
import OverviewAllSitesRevenue from './OverviewAllSitesRevenueComponent'

class OverviewAllSitesComponent extends React.Component {
  sumUp(data) {
    return data.reduce((reduction, item) => {
      return reduction.mergeWith((x, y) => {
        return parseFloat(x) + parseFloat(y);
      }, item)
    });
  }

  render() {
    const hasData = this.props.activeUsers && this.props.adSenseReports;
    if (!hasData) return null;

    const data = this.props.properties.mergeDeep(this.props.activeUsers, this.props.adSenseReports);
    const total = this.sumUp(data);
    return (
      <div className="OverviewAllSites ui two column grid">
        <div className="row">
          <div className="column">
            <div className="ui raised blue segment">
              <div className="ui grid">
                <div className="eight wide column">
                  <OverviewAllSitesActiveUsers activeUsers={total.get('totalDevices')}/>
                </div>
                <div className="eight wide column">
                  <OverviewAllSitesRevenue earning={total.get('earning')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OverviewAllSitesComponent.displayName = 'OverviewAllSitesComponent';

// Uncomment properties you need
OverviewAllSitesComponent.propTypes = {

};
// OverviewAllSitesComponent.defaultProps = {};

export default OverviewAllSitesComponent;
