'use strict';

import React from 'react';

require('styles/components//Reporting.less');

class ReportingComponent extends React.Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown({
      onChange: (value) => {
        this.props.actions.ReportingSelectProperty(value);
      }
    });
  }

  componentDidUpdate() {
    $('.ui.dropdown').dropdown('refresh');
  }

  renderRow(data) {
    return data.map((item, key) => {
      return (<tr key={key}>
        <td>{item.get(0)}</td>
        <td>{item.get(1)}</td>
      </tr>);
    })
  }

  renderReporter() {
    return (
      <table className="ui fixed single line celled table">
        <thead>
        <tr>
          <th>Path</th>
          <th>Views</th>
        </tr>
        </thead>
        <tbody>
        {this.renderRow(this.props.Reporting.getIn(['adAnalytics', 'data']))}
        </tbody>
      </table>
    )
  }

  render() {
    const properties = this.props.Google.get('analyticsAccounts').get(0).get('properties');
    const reporter = this.props.Reporting.getIn(['adAnalytics', 'data']) ? this.renderReporter() : null;
    return (
      <div className="Reporting">
        <div className="ui selection dropdown">
          <input type="hidden" name="gender"/>
          <i className="dropdown icon"/>
          <div className="default text">Property</div>
          <div className="menu">
            {properties.map(property => {
              return (
                <div className="item"
                     key={property.get('id')}
                     data-value={property.get('id')}>{property.get('name')}</div>
              );
            })}
          </div>
        </div>

        {reporter}
      </div>
    );
  }
}

ReportingComponent.displayName = 'ReportingComponent';

// Uncomment properties you need
// ReportingComponent.propTypes = {};
// ReportingComponent.defaultProps = {};

export default ReportingComponent;
