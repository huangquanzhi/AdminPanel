module.exports = process.env.NODE_ENV === 'production' ?
  require('./configStore.prod.js') : require('./configStore.dev.js');
