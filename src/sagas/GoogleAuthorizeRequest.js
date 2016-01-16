import {call, put, take, fork} from 'redux-saga';
import {authorize as googleAuthorize} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* request() {
  try {
    const result = yield call(googleAuthorize);
    yield put(GoogleAuthorizeSuccess(result));
  }
  catch (err) {
    yield put(GoogleAuthorizeFailure(err));
  }
}

export default function* () {
  while (yield take('GOOGLE_AUTHORIZE_REQUEST')) {
    yield fork(request);
  }
}
