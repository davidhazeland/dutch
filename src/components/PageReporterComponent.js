'use strict';

import React from 'react';

require('styles/components//PageReporter.less');

import ReporterSearchBox from './ReporterSearchBoxComponent';
import ReporterResult from './ReporterResultComponent';

class PageReporterComponent extends React.Component {
  handleSearchBoxChange(value) {
    this.props.actions.PageReporterSetKeyword(value);
  }

  render() {
    return (
      <div className="PageReporter">
        <h2 className="ui header">Pages</h2>
        <ReporterSearchBox onChange={value => this.handleSearchBoxChange(value)}/>
        <ReporterResult result={this.props.PageReporter.get('result')}/>
      </div>
    );
  }
}

PageReporterComponent.displayName = 'PageReporterComponent';

// Uncomment properties you need
// PageReporterComponent.propTypes = {};
// PageReporterComponent.defaultProps = {};

export default PageReporterComponent;
