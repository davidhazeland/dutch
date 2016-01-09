'use strict';

import React from 'react';

require('styles/components//ReporterSearchBox.less');

class ReporterSearchBoxComponent extends React.Component {
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const node = this.refs.input;
      const text = node.value.trim();
      this.props.onChange(text);
    }
  }

  render() {
    return (
      <div className="ReporterSearchBox ui icon input">
        <input type="text" ref="input" placeholder="Search..." onKeyUp={e => this.handleKeyUp(e)}/>
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
