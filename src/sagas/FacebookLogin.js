import {call, put, take, fork} from 'redux-saga';
import {login as facebookLogin} from '../fb/OAuth';
import FacebookAuthorizeSuccess from '../actions/FacebookAuthorizeSuccess';
import FacebookAuthorizeFailure from '../actions/FacebookAuthorizeFailure';

export function* login() {
  try {
    const result = yield call(facebookLogin);
    yield put(FacebookAuthorizeSuccess(result));
  }
  catch (err) {
    yield put(FacebookAuthorizeFailure(err));
  }
}

export default function* () {
  while (yield take('FACEBOOK_LOGIN')) {
    yield fork(login);
  }
}
