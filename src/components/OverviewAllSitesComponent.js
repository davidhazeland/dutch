'use strict';

import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//OverviewAllSites.less');

import createOverviewAllSitesActiveUsers from './OverviewAllSitesActiveUsersComponent'
import createOverviewAllSitesRevenue from './OverviewAllSitesEarningsComponent'

const sum = data => {
  return data.reduce((reduction, item) => {
    return reduction.mergeWith((x, y) => {
      return parseFloat(x) + parseFloat(y);
    }, item)
  });
};

export default React => {
  const {any} = React.PropTypes;

  const OverviewAllSites = ({data}) => {
    const OverviewAllSitesActiveUsers = createOverviewAllSitesActiveUsers(React);
    const OverviewAllSitesRevenue = createOverviewAllSitesRevenue(React);

    const total = sum(data);
    const activeUsers = total.get('totalDevices');
    const earnings = total.get('earnings');

    return (
      <div className="OverviewAllSites ui two column grid">
        <div className="row">
          <div className="column">
            <div className="ui raised blue segment">
              <div className="ui grid">
                <div className="eight wide column">
                  <OverviewAllSitesActiveUsers activeUsers={activeUsers}/>
                </div>
                <div className="eight wide column">
                  <OverviewAllSitesRevenue earnings={earnings}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  OverviewAllSites.propTypes = {
    data: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        totalDevices: any.isRequired,
        earnings: any.isRequired
      })
    ).isRequired
  };

  return OverviewAllSites;
}
