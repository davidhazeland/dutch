import {call, put, take, fork} from 'redux-saga';
import {authorize as googleAuthorize} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* authorize() {
  try {
    yield call(googleAuthorize);
    yield put(GoogleAuthorizeSuccess());
  }
  catch (err) {
    yield put(GoogleAuthorizeFailure());
  }
}

export default function* () {
  while (yield take('GOOGLE_AUTHORIZE')) {
    yield fork(authorize);
  }
}
