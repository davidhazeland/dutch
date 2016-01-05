'use strict';

import React from 'react';

require('styles//Content.less');

class ContentComponent extends React.Component {
  render() {
    return (
      <div className="content-component">
        <table className="ui celled table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>No Name Specified</td>
            <td>Unknown</td>
            <td className="negative">None</td>
          </tr>
          <tr className="positive">
            <td>Jimmy</td>
            <td><i className="icon checkmark"></i> Approved</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td>Unknown</td>
            <td className="positive"><i className="icon close"></i> Requires call</td>
          </tr>
          <tr className="negative">
            <td>Jill</td>
            <td>Unknown</td>
            <td>None</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
