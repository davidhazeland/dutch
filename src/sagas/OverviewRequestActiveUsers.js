import {call, put, take, fork} from 'redux-saga';
import {batch} from '../gapi/ActiveUsers';
import OverviewReceiveActiveUsers from '../actions/OverviewReceiveActiveUsers';

export function* requestActiveUsers(getState) {
  const googleState = getState().Google;
  const analyticsAccount = googleState.get('analyticsAccounts').get(0).toJS();

  const {result, error} = yield call(batch, analyticsAccount);
  if (!error) {
    yield put(OverviewReceiveActiveUsers(result));
  }
}

export default function* (getState) {
  while (yield take('OVERVIEW_REQUEST_ACTIVE_USERS')) {
    yield fork(requestActiveUsers, getState);
  }
}
