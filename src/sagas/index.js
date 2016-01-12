const sagas = [
  require('./GoogleAuthorize'),
  require('./GoogleSignIn')
];

module.exports = sagas.map(saga => {
  return saga.default;
});
