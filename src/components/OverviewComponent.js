'use strict';

import React, {PropTypes} from 'react';
import cx from 'classnames';

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

    const loaderClass = cx('ui inverted dimmer', {
      'active': !hasData
    });

    const props = {
      properties,
      activeUsers,
      adSenseReports
    };

    return (
      <div className="Overview">
        <div className={loaderClass}>
          <div className="ui indeterminate loader"></div>
        </div>
        <OverviewAllSites {...props}/>
        <OverviewSiteList {...props}/>
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
