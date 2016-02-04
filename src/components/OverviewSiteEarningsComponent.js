'use strict';

require('styles/components//OverviewSiteEarnings.less');

export default React => {
  const {number} = React.PropTypes;

  const OverviewSiteEarnings = ({earnings}) => {
    return (
      <div className="OverviewSiteEarnings">
        <div className="ui mini green statistic">
          <div className="value">
            ${earnings}
          </div>
          <div className="grey label">
            earnings
          </div>
        </div>
      </div>
    );
  };

  OverviewSiteEarnings.propTypes = {
    earnings: number.isRequired
  };

  return OverviewSiteEarnings;
};
