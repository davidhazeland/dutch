'use strict';

import React from 'react';

require('styles//PageReporter.less');

import ReporterSearchBox from './ReporterSearchBoxComponent';
import ReporterResult from './ReporterResultComponent';

class PageReporterComponent extends React.Component {
  render() {
    return (
      <div className="PageReporter">
        <h2 className="ui header">Pages</h2>
        <ReporterSearchBox/>
        <ReporterResult/>
      </div>
    );
  }
}

PageReporterComponent.displayName = 'PageReporterComponent';

// Uncomment properties you need
// PageReporterComponent.propTypes = {};
// PageReporterComponent.defaultProps = {};

export default PageReporterComponent;
