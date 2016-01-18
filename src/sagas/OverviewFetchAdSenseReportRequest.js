import delay from 'delay';
import config from 'config';
import {call, put, take, fork, race} from 'redux-saga';
import {fetch} from '../gapi/AdSenseReport';
import OverviewFetchAdSenseReportsSuccess from '../actions/OverviewFetchAdSenseReportsSuccess';
import OverviewFetchAdSenseReportsFailure from '../actions/OverviewFetchAdSenseReportsFailure';

export function* request(getState) {
  const analyticsAccount = getState().Google.get('analyticsAccounts').get(0).toJS();

  try {
    const result = yield call(fetch, analyticsAccount);
    yield put(OverviewFetchAdSenseReportsSuccess(result));
  }
  catch (err) {
    yield put(OverviewFetchAdSenseReportsFailure(err));
  }
}


export function* autoUpdate(getState) {
  while(true) {
    const {stop} = yield race({
      tick: call(delay, config.OVERVIEW_ADSENSE_REPORTS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ADSENSE_REPORTS')
    });
    if (!stop) {
      yield fork(request, getState);
    } else {
      break;
    }
  }
}


export default function* (getState) {
  while (yield take('OVERVIEW_FETCH_ADSENSE_REPORTS_REQUEST')) {
    yield fork(request, getState);

    yield fork(autoUpdate, getState);
  }
}
