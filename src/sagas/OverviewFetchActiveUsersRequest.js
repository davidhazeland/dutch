import delay from 'delay';
import config from 'config';
import {call, put, take, fork, race} from 'redux-saga';
import {fetch} from '../services/ActiveUsersCache';
import OverviewFetchActiveUsersSuccess from '../actions/OverviewFetchActiveUsersSuccess';
import OverviewFetchActiveUsersFailure from '../actions/OverviewFetchActiveUsersFailure';


export function* request(getState) {
  const analyticsAccount = getState().Google.getIn(['analyticsAccounts', 0]).toJS();

  try {
    const result = yield call(fetch, analyticsAccount);
    yield put(OverviewFetchActiveUsersSuccess(result));
  }
  catch (err) {
    yield put(OverviewFetchActiveUsersFailure(err));
  }
}


export function* autoUpdate(getState) {
  while(true) {
    const {stop} = yield race({
      tick: call(delay, config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD),
      stop: take('OVERVIEW_STOP_FETCH_ACTIVE_USERS')
    });
    if (!stop) {
      yield fork(request, getState);
    } else {
      break;
    }
  }
}


export default function* (getState) {
  while (yield take('OVERVIEW_FETCH_ACTIVE_USERS_REQUEST')) {
    yield fork(request, getState);

    yield fork(autoUpdate, getState);
  }
}
