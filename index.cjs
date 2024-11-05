const { createRequire } = require('module');
const require = createRequire(__dirname);

const ExpectHelper = require('./index.js').default;

module.exports = ExpectHelper;
