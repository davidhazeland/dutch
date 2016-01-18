import config from 'config';
import delay from 'delay';
import {call, put, take, fork, race} from 'redux-saga';
import {fetch} from '../gapi/ActiveUsers';
import OverviewFetchActiveUsersRequest from '../actions/OverviewFetchActiveUsersRequest';
import OverviewFetchActiveUsersSuccess from '../actions/OverviewFetchActiveUsersSuccess';
import OverviewFetchActiveUsersFailure from '../actions/OverviewFetchActiveUsersFailure';

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
