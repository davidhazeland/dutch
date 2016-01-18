const sagas = [
  require('./ReportingSelectProperty'),
  require('./OverviewFetchActiveUsersRequest'),
  require('./FacebookAuthorize'),
  require('./FacebookLogin'),
  require('./GoogleAuthorizeRequest'),
  require('./GoogleLoginRequest')
];

module.exports = sagas.map(saga => {
  return saga.default;
});
