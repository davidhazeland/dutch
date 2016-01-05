'use strict';

import React from 'react';

require('styles//PageReporter.less');

class PageReporterComponent extends React.Component {
  render() {
    return (
      <div className="pagereporter-component">
        <h2 class="ui header">Pages</h2>
        <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
            <i className="search icon"></i>
        </div>
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

PageReporterComponent.displayName = 'PageReporterComponent';

// Uncomment properties you need
// PageReporterComponent.propTypes = {};
// PageReporterComponent.defaultProps = {};

export default PageReporterComponent;
