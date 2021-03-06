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
import createMain from '../components/Main';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  componentDidMount() {
    this.props.actions.GoogleLoginRequest();
  }

  render() {
    const Main = createMain(React);

    const {actions, Google, Facebook} = this.props;
    return (
      <Main
        actions={actions}
        Google={Google}
        Facebook={Facebook}>
        {this.props.children}
      </Main>
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
  Facebook: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    Google: state.Google,
    Facebook: state.Facebook
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    GoogleAuthorizeRequest: require('../actions/GoogleAuthorizeRequest.js'),
    GoogleLoginRequest: require('../actions/GoogleLoginRequest.js'),
    FacebookAuthorize: require('../actions/FacebookAuthorize.js'),
    FacebookLogin: require('../actions/FacebookLogin.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
