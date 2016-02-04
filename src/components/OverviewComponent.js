'use strict';

import React from 'react';

require('styles/components//Overview.less');

import createOverviewAllSites from './OverviewAllSitesComponent';
import createOverviewSiteList from './OverviewSiteListComponent';

class OverviewComponent extends React.Component {
  componentDidMount() {
    this.props.actions.OverviewFetchActiveUsersRequest();
    this.props.actions.OverviewFetchAdSenseReportsRequest();
  }

  componentWillUnmount() {
    this.props.actions.OverviewStopFetchActiveUsers();
    this.props.actions.OverviewStopAdSenseReportsRequest();
  }

  renderLoader() {
    return (
      <div className="Overview">
        <div className="ui inverted dimmer active">
          <div className="ui indeterminate loader"></div>
        </div>
      </div>
    );
  }

  render() {
    const properties = this.props.Google.getIn(['analyticsAccounts', 0, 'properties']);
    const activeUsers = this.props.Overview.getIn(['activeUser', 'data']);
    const adSenseReports = this.props.Overview.getIn(['adSenseReport', 'data']);

    const hasData = activeUsers && adSenseReports;
    if (!hasData) return this.renderLoader();

    const data = properties.mergeDeep(activeUsers, adSenseReports);

    const OverviewAllSites = createOverviewAllSites(React);
    const OverviewSiteList = createOverviewSiteList(React);

    return (
      <div className="Overview">
        <OverviewAllSites data={data}/>
        <OverviewSiteList data={data}/>
      </div>
    );
  }
}

OverviewComponent.displayName = 'OverviewComponent';

// Uncomment properties you need
//OverviewComponent.propTypes = {
//
//};
// OverviewComponent.defaultProps = {};

export default OverviewComponent;
