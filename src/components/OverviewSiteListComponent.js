'use strict';

import ImmutablePropTypes from 'react-immutable-proptypes';

require('styles/components//OverviewSiteList.less');

import createOverviewSiteItem from './OverviewSiteItemComponent';

export default React => {
  const OverviewSiteList = ({data}) => {
    const OverviewSiteItem = createOverviewSiteItem(React);

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
  };

  OverviewSiteList.propTypes = {
    data: ImmutablePropTypes.list.isRequired
  };

  return OverviewSiteList;
};
