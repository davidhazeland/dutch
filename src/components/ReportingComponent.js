'use strict';

import React from 'react';

require('styles/components//Reporting.less');

class ReportingComponent extends React.Component {
  render() {
    const authorized = this.props.Facebook.get('authorized') && this.props.Google.get('authorized');
    if (!authorized) return null;
    return (
      <div className="Reporting">
        Lorem ipsum dolor sit amet.
      </div>
    );
  }
}

ReportingComponent.displayName = 'ReportingComponent';

// Uncomment properties you need
// ReportingComponent.propTypes = {};
// ReportingComponent.defaultProps = {};

export default ReportingComponent;
