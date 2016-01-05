'use strict';

import React from 'react';

require('styles/components//ReporterResult.less');

class ReporterResultComponent extends React.Component {
  render() {
    return (
      <div className="ReporterResult">
        <table className="ui orange celled table">
          <thead>
          <tr>
            <th>Pages</th>
            <th>Pageviews</th>
            <th>Unique Pageviews</th>
            <th>Avg. Time on Page</th>
            <th>Entrances</th>
            <th>Bounce Rate</th>
            <th>% Exit</th>
            <th>Page Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
            </td>
            <td>33,122 (2.51%)</td>
            <td>27,345 (2.28%)</td>
            <td>00:01:44</td>
            <td>26,848 (3.78%)</td>
            <td>70.09%</td>
            <td>69.80%</td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td>/ung-dung/theo-doi-can-nang-thai-ky/</td>
            <td>33,122 (2.51%)</td>
            <td>27,345 (2.28%)</td>
            <td>00:01:44</td>
            <td>26,848 (3.78%)</td>
            <td>70.09%</td>
            <td>69.80%</td>
            <td>$0.00</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReporterResultComponent.displayName = 'ReporterResultComponent';

// Uncomment properties you need
// ReporterResultComponent.propTypes = {};
// ReporterResultComponent.defaultProps = {};

export default ReporterResultComponent;
