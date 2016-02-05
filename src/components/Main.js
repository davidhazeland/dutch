require('jquery');
require('semantic');
require('normalize.css');
require('styles/index.less');

import createHeader from './HeaderComponent';
import createNavigation from './NavigationComponent';
import createContent from './ContentComponent';

export default React => {
  const renderContent = (children) => {
    const Content = createContent(React);
    return (
      <Content>
        {children}
      </Content>
    );
  };

  const App = (props) => {
    const Header = createHeader(React);
    const Navigation = createNavigation(React);

    const isAuthorized = props.Google.get('authorized') && props.Facebook.get('authorized');
    const content = isAuthorized ? renderContent(props.children) : null;

    return (
      <div className="Main">
        <Header {...props}/>
        <Navigation/>
        {content}
      </div>
    );
  };

  App.propTypes = {};

  return App;
};
