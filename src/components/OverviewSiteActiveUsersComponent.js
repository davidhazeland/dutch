'use strict';

require('styles/components//OverviewSiteActiveUsers.less');

export default React => {
  const {number} = React.PropTypes;

  const OverviewSiteActiveUsers = ({activeUsers}) => {
    return (
      <div className="OverviewSiteActiveUsers">
        <div className="ui small grey statistic">
          <div className="value">
            {activeUsers}
          </div>
          <div className="label">
            active users
          </div>
        </div>
      </div>
    );
  };

  OverviewSiteActiveUsers.propTypes = {
    activeUsers: number.isRequired
  };

  return OverviewSiteActiveUsers;
};
