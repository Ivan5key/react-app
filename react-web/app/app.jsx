'use strict';
require('../styles/app.less');
import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({displayName: 'Hello',
  render: function() {
    return (
<div>
    Start state project
</div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
