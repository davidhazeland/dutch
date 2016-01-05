'use strict';

import React from 'react';

require('styles//ReporterSearchBox.less');

class ReporterSearchBoxComponent extends React.Component {
  render() {
    return (
      <div className="ReporterSearchBox ui icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search icon"/>
      </div>
    );
  }
}

ReporterSearchBoxComponent.displayName = 'ReporterSearchBoxComponent';

// Uncomment properties you need
// ReporterSearchBoxComponent.propTypes = {};
// ReporterSearchBoxComponent.defaultProps = {};

export default ReporterSearchBoxComponent;
