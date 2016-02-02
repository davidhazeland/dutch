'use strict';

import React from 'react';

require('styles/components//OverviewSiteList.less');

import OverviewSiteItem from './OverviewSiteItemComponent';

class OverviewSiteListComponent extends React.Component {

  render() {
    const hasData = this.props.activeUsers && this.props.adSenseReports;
    if (!hasData) return null;

    const data = this.props.properties.mergeDeep(this.props.activeUsers, this.props.adSenseReports);
    return (
      <div className="OverviewSiteList">
        <div className="ui three column grid">
          {data.map((item, key) => {
            return (
              <div className="column" key={key}>
                <OverviewSiteItem data={item}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

OverviewSiteListComponent.displayName = 'OverviewSiteListComponent';

// Uncomment properties you need
// OverviewSiteListComponent.propTypes = {};
// OverviewSiteListComponent.defaultProps = {};

export default OverviewSiteListComponent;
