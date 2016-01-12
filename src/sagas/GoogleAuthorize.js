import {call, put, take, fork} from 'redux-saga';
import {authorize as googleAuthorize} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* authorize() {
  const {result, error} = yield call(googleAuthorize);
  if (!error) {
    yield put(GoogleAuthorizeSuccess(result));
  } else {
    yield put(GoogleAuthorizeFailure(error));
  }
}

export default function* () {
  while (yield take('GOOGLE_AUTHORIZE')) {
    yield fork(authorize);
  }
}
