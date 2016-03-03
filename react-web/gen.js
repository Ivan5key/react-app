'use strict';
console.log('start!!!!!!!!!!!!!!');
var sprite = require('sprity');
sprite.create({
  src: './img',
  out: './sprites',
  name: '111',
  style: './styles/imgstyle.less',
  processor: 'less',
  engine: 'sprity-gm',
  'dimension': [{
      ratio: 1, dpi: 72
  }, {
      ratio: 2, dpi: 192
  }]
}, function () {
  console.log('done');
});
