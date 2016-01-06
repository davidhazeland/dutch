'use strict';

import React from 'react';

require('styles/components//Content.less');

//import PageReporter from '../containers/PageReporter';

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="Content">
        {this.props.children}
      </div>
    );
  }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
