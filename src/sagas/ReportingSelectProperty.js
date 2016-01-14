import {call, put, take, fork} from 'redux-saga';
import {query} from '../services/AdAnalytics';
import ReportingReceiveAdAnalytics from 'actions/ReportingReceiveAdAnalytics';
import ReportingRequestAdAnalyticsFailure from 'actions/ReportingRequestAdAnalyticsFailure';

export function* requestAdAnalytics(getState) {
  const state = getState();
  const adAccount = state.Facebook.get('adAccounts').get(0).toJS();
  const selectedProperty = state.Reporting.get('selectedProperty');
  const property = state.Google
    .get('analyticsAccounts').get(0).get('properties')
    .find(p => p.get('id') == selectedProperty).toJS();

  try {
    const result = yield call(query, adAccount, property, {});
    yield put(ReportingReceiveAdAnalytics(result));
  }
  catch (err) {
    yield put(ReportingRequestAdAnalyticsFailure(err));
  }
}

export default function* (getState) {
  while (yield take('REPORTING_SELECT_PROPERTY')) {
    yield fork(requestAdAnalytics, getState);
  }
}
