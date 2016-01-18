'use strict';

import React, {PropTypes} from 'react';

require('styles/components//Overview.less');

class OverviewComponent extends React.Component {
  componentDidMount() {
    this.props.actions.OverviewFetchActiveUsersRequest();
  }

  componentWillUnmount() {
    this.props.actions.OverviewStopFetchActiveUsers();
  }

  viewIdToName(id) {
    const map = {
      '100697044': 'Con là tất cả',
      '111505121': 'Mang thai lần đầu',
      '113933233': 'Nhật ký nuôi con'
    };

    return map[id];
  }

  renderActiveUser() {
    if (!this.props.Overview.getIn(['activeUser', 'data'])) return null;

    const data = this.props.Overview.getIn(['activeUser', 'data']);
    const total = data.reduce((reduction, value) => {
      return reduction + parseInt(value.get('total'));
    }, 0);
    return (
      <div className="">
        <div className="ui segment">
          <div className="ui green statistics">
            <div className="statistic">
              <div className="value">
                {total}
              </div>
              <div className="grey label">
                Total
              </div>
            </div>
          </div>
        </div>
        <div className="ui horizontal segments">
          {data.map((item, key) => {
            return (
              <div className="ui segment" key={key}>
                <div className="ui orange statistic">
                  <div className="value">
                    {item.get('total')}
                  </div>
                  <div className="grey label">
                    {this.viewIdToName(item.get('id'))}
                  </div>
                </div>
                <div className="ui mini grey statistics">
                  {item.get('rows').map((row, key) => {
                    return (
                      <div className="statistic" key={key}>
                        <div className="value">
                          {row.get(1)}
                        </div>
                        <div className="grey label">
                          {row.get(0)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )


  }

  render() {
    return (
      <div className="Overview">
        {this.renderActiveUser()}
      </div>
    );
  }
}

OverviewComponent.displayName = 'OverviewComponent';

// Uncomment properties you need
OverviewComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  Google: PropTypes.object.isRequired
};
// OverviewComponent.defaultProps = {};

export default OverviewComponent;
