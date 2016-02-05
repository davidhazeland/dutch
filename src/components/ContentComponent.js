'use strict';

import React from 'react';

require('styles/components//Content.less');

export default React => ({children}) => {
  return (
    <div className="Content">
      {children}
    </div>
  )
}
