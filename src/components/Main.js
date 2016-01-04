require('jquery');
require('semantic');
require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <select className="ui dropdown">
          <option value="">Gender</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
