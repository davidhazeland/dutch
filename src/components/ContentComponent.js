'use strict';

import React from 'react';

require('styles/components//Content.less');

import PageReporter from './PageReporterComponent';

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="Content">
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
