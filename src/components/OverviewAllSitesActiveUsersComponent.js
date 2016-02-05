'use strict';

require('styles/components//OverviewAllSitesActiveUsers.less');

export default React => {
  const {number} = React.PropTypes;

  const OverviewAllSitesActiveUsers = ({activeUsers}) => {
    return (
      <div className="OverviewAllSitesActiveUsers">
        <div className="ui statistic">
          <div className="value">
            {activeUsers}
          </div>
          <div className="grey label">
            active users
          </div>
        </div>
      </div>
    )
  };

  OverviewAllSitesActiveUsers.propTypes = {
    activeUsers: number.isRequired
  };

  return OverviewAllSitesActiveUsers;
};
