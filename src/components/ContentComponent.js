'use strict';

import React from 'react';

require('styles//Content.less');

import PageReporter from './PageReporterComponent';

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="content-component">
        <PageReporter/>
      </div>
    );
  }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
