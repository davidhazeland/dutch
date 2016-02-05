'use strict';

require('styles/components//Overview.less');

import createOverviewAllSites from './OverviewAllSitesComponent';
import createOverviewSiteList from './OverviewSiteListComponent';

export default React => {
  const renderLoader = () => {
    return (
      <div className="Overview">
        <div className="ui inverted dimmer active">
          <div className="ui indeterminate loader"></div>
        </div>
      </div>
    )
  };

  const Overview = (props) => {
    const OverviewAllSites = createOverviewAllSites(React);
    const OverviewSiteList = createOverviewSiteList(React);

    const properties = props.Google.getIn(['analyticsAccounts', 0, 'properties']);
    const activeUsers = props.Overview.getIn(['activeUser', 'data']);
    const adSenseReports = props.Overview.getIn(['adSenseReport', 'data']);

    const hasData = activeUsers && adSenseReports;
    if (!hasData) return renderLoader();

    const data = properties.mergeDeep(activeUsers, adSenseReports);

    return (
      <div className="Overview">
        <OverviewAllSites data={data}/>
        <OverviewSiteList data={data}/>
      </div>
    );
  };

  Overview.propTypes = {};

  return Overview;
};
