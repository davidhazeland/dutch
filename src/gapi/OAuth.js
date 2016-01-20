/* global gapi */

import Promise from 'bluebird';
import config from 'config';

// Set authorized scope.
const SCOPES = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/adsense.readonly'
];

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


function request(immediate = true) {
  // Handles the authorization flow.
  // `immediate` should be false when invoked from the button click.
  const authData = {
    client_id: config.GOOGLE_API_CLIENT_ID,
    scope: SCOPES,
    immediate: immediate
  };

  return gapi.auth.authorize(authData);
}


function load() {
  const analytics = gapi.client.load('analytics', 'v3');
  const adsense = gapi.client.load('adsense', 'v1.4');
  return new Promise.all([analytics, adsense]);
}


export function authorize(immediate = false) {
  return new Promise((resolve, reject) => {
    request(immediate).then(response => {
      load().then(() => {
        resolve(handle(response));
      }, () => {
        reject(new Error('Google API load failure!'));
      });
    }, () => {
      reject(new Error('Google authorize failure!'));
    });
  });
}


function handle(response) {
  const refreshPeriod = (response.expires_in - 10) * 1000; // refresh token before expire 10 seconds
  setTimeout(() => {
    authorize(true).then(() => {
      // Updated authorization
    }, () => {

    });
  }, refreshPeriod);
  return response;
}


export function login() {
  return new Promise((resolve, reject) => {
    hasAPI(() => {
      authorize(true).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      });
    });
  });
}
