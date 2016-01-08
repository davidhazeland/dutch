import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PageReporterComponent from '../components/PageReporterComponent';

class PageReporter extends Component {
  render(){
    const {actions, PageReporter} = this.props;
    return <PageReporterComponent actions={actions} PageReporter={PageReporter}/>;
  }
}

PageReporter.propTypes = {
  actions: PropTypes.object.isRequired,
  PageReporter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { PageReporter: state.PageReporter };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    PageReporterSetResult: require('../actions/PageReporterSetResult.js'),
    PageReporterSearch: require('../actions/PageReporterSearch.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PageReporter);
