'use strict';
require('../styles/app.less');
import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({displayName: 'Hello',
  render: function() {
    return (
<div>
    <div className="one">

        <div className="right">
        <div className="top"></div>
    </div>
    </div>
    <div className="left"></div>
</div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
