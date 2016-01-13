import config from 'config';
import delay from 'delay';
import {call, put, take, fork, race} from 'redux-saga';
import {batch} from '../gapi/ActiveUsers';
import OverviewReceiveActiveUsers from '../actions/OverviewReceiveActiveUsers';
import OverviewRequestActiveUsersFailure from '../actions/OverviewRequestActiveUsersFailure';

export function* requestActiveUsers(getState) {
  const googleState = getState().Google;
  const analyticsAccount = googleState.get('analyticsAccounts').get(0).toJS();

  try {
    const result = yield call(batch, analyticsAccount);
    yield put(OverviewReceiveActiveUsers(result));
  }
  catch (err) {
    yield put(OverviewRequestActiveUsersFailure(err));
  }
}


export default function* (getState) {
  while (yield take('OVERVIEW_REQUEST_ACTIVE_USERS')) {

    yield fork(requestActiveUsers, getState);

    while (true) {
      const {stop} = yield race({
        stop: take('OVERVIEW_STOP_REQUEST_ACTIVE_USERS'),
        tick: call(delay, config.OVERVIEW_REFRESH_PERIOD)
      });
      if (!stop) {
        yield fork(requestActiveUsers, getState);
      } else {
        break;
      }
    }

  }
}
