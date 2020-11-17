'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./posts');
} else {
  module.exports = require('./posts');
}
