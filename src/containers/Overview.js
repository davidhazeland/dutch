/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OverviewComponent from '../components/OverviewComponent';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, Google, Overview} = this.props;
    return (
      <OverviewComponent actions={actions} Google={Google} Overview={Overview}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  Google: PropTypes.object.isRequired,
  Overview: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    Google: state.Google,
    Overview: state.Overview
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    OverviewFetchAdSenseReportsRequest: require('../actions/OverviewFetchAdSenseReportsRequest.js'),
    OverviewStopAdSenseReportsRequest: require('../actions/OverviewStopAdSenseReportsRequest.js'),
    OverviewFetchActiveUsersRequest: require('../actions/OverviewFetchActiveUsersRequest.js'),
    OverviewStopFetchActiveUsers: require('../actions/OverviewStopFetchActiveUsers.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
