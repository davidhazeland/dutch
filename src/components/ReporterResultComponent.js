'use strict';

import React from 'react';

require('styles/components//ReporterResult.less');

class ReporterResultComponent extends React.Component {
  render() {
    if (!this.props.result) return (
      <h4>Empty!</h4>
    );
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
          {this.props.result.rows.map((item, key)=> {
            return (
              <tr key={key}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
              </tr>
            )
          })}
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
