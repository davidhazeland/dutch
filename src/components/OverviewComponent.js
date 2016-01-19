'use strict';

import React, {PropTypes} from 'react';

require('styles/components//Overview.less');

import OverviewAllSites from './OverviewAllSitesComponent';
import OverviewSiteList from './OverviewSiteListComponent';

class OverviewComponent extends React.Component {
  componentDidMount() {
    this.props.actions.OverviewFetchActiveUsersRequest();
    this.props.actions.OverviewFetchAdSenseReportsRequest();
  }

  componentWillUnmount() {
    this.props.actions.OverviewStopFetchActiveUsers();
    this.props.actions.OverviewStopAdSenseReportsRequest();
  }


  render() {
    const properties = this.props.Google.getIn(['analyticsAccounts', 0, 'properties']);
    const activeUsers = this.props.Overview.getIn(['activeUser', 'data']);
    const adSenseReports = this.props.Overview.getIn(['adSenseReport', 'data']);

    const hasData = activeUsers && adSenseReports;
    if (!hasData) return null;

    const data = properties.mergeDeep(activeUsers, adSenseReports);

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
OverviewComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  Google: PropTypes.object.isRequired,
  Overview: PropTypes.object.isRequired
};
// OverviewComponent.defaultProps = {};

export default OverviewComponent;
