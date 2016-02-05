'use strict';

require('styles/components//Navigation.less');

export default React => () => {
  return (
    <div className="Navigation">
      <div className="ui vertical menu">
        <div className="item">
          <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div>
        <div className="item">
          This area
          <div className="menu">
            <a className="active item">is</a>
            <a className="item">coming soon</a>
            <a className="item">so</a>
          </div>
        </div>
        <a className="item">
          <i className="grid layout icon"/> You
        </a>
        <a className="item">
          can't do anything
        </a>
      </div>
    </div>
  )
};
