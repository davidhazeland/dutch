/* global gapi */

import config from 'config';

// Set authorized scope.
const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

function hasAPI(callback) {
  if (typeof (gapi) !== 'undefined' && gapi.client) {
    callback();
  }
  else {
    window.setTimeout(function () {
      hasAPI(callback);
    }, 50);
  }
}


export function authorize(immediate = true) {
  // Handles the authorization flow.
  // `immediate` should be false when invoked from the button click.
  const authData = {
    client_id: config.GOOGLE_API_CLIENT_ID,
    scope: SCOPES,
    immediate: immediate
  };

  return gapi.auth.authorize(authData);
}


export function load() {
  return gapi.client.load('analytics', 'v3');
}


export function signIn() {
  hasAPI(()=> {
    authorize().then(load);
  });
}
