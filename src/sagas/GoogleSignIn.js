import {call, put, take, fork} from 'redux-saga';
import {signIn as googleSignIn} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* signIn() {
  try {
    yield call(googleSignIn);
    yield put(GoogleAuthorizeSuccess());
  }
  catch (err) {
    yield put(GoogleAuthorizeFailure());
  }
}

export default function* () {
  while (yield take('GOOGLE_SIGN_IN')) {
    yield fork(signIn);
  }
}
