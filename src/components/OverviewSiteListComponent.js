'use strict';

import React from 'react';

require('styles/components//OverviewSiteList.less');

import OverviewSiteItem from './OverviewSiteItemComponent';

class OverviewSiteListComponent extends React.Component {
  render() {
    return (
      <div className="OverviewSiteList">
        <div className="ui three column grid">
          {this.props.data.map((item, key) => {
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
