import {call, put, take, fork} from 'redux-saga';
import {signIn as googleSignIn} from '../gapi/OAuth';
import GoogleAuthorizeSuccess from '../actions/GoogleAuthorizeSuccess';
import GoogleAuthorizeFailure from '../actions/GoogleAuthorizeFailure';

export function* signIn() {
  try {
    const result = yield call(googleSignIn);
    yield put(GoogleAuthorizeSuccess(result));
  }
  catch (err) {
    yield put(GoogleAuthorizeFailure(err));
  }
}

export default function* () {
  while (yield take('GOOGLE_SIGN_IN')) {
    yield fork(signIn);
  }
}
