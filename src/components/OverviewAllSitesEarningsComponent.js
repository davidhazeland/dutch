'use strict';

require('styles/components//OverviewAllSitesEarnings.less');

const round = (earnings) => {
  return Math.round(earnings * 10) / 10;
};

export default React => {
  const {number} = React.PropTypes;

  const OverviewAllSitesEarnings = ({earnings}) => {
    return (
      <div className="OverviewAllSitesEarnings">
        <div className="ui green small statistic">
          <div className="value">
            ${round(earnings)}
          </div>
          <div className="grey label">
            earnings
          </div>
        </div>
      </div>
    )
  };

  OverviewAllSitesEarnings.propTypes = {
    earnings: number.isRequired
  };

  return OverviewAllSitesEarnings;
};
