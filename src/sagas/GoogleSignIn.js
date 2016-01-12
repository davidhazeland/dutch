import {call, put, take, fork} from 'redux-saga';
import {signIn as googleSignIn} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* signIn() {
  const {result, error} = yield call(googleSignIn);
  if (result) {
    yield put(GoogleAuthorizeSuccess(result));
  } else {
    yield put(GoogleAuthorizeFailure(error));
  }
}

export default function* () {
  while (yield take('GOOGLE_SIGN_IN')) {
    yield fork(signIn);
  }
}
