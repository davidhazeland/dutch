import {call, put, take, fork} from 'redux-saga';
import {authorize as facebookAuthorize} from '../fb/OAuth';
import FacebookAuthorizeSuccess from '../actions/FacebookAuthorizeSuccess';
import FacebookAuthorizeFailure from '../actions/FacebookAuthorizeFailure';

export function* authorize() {
  try {
    const result = yield call(facebookAuthorize);
    yield put(FacebookAuthorizeSuccess(result));
  }
  catch (err) {
    yield put(FacebookAuthorizeFailure(err));
  }
}

export default function* () {
  while (yield take('FACEBOOK_AUTHORIZE')) {
    yield fork(authorize);
  }
}
