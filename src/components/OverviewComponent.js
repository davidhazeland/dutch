'use strict';

import React, {PropTypes} from 'react';

require('styles/components//Overview.less');

class OverviewComponent extends React.Component {
  render() {
    return (
      <div className="Overview">
        Lorem ipsum dolor sit amet.
      </div>
    );
  }
}

OverviewComponent.displayName = 'OverviewComponent';

// Uncomment properties you need
 OverviewComponent.propTypes = {
   actions: PropTypes.object.isRequired,
   Google: PropTypes.object.isRequired
 };
// OverviewComponent.defaultProps = {};

export default OverviewComponent;
