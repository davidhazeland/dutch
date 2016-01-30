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


function requestAuthorization(immediate = true) {
  // Handles the authorization flow.
  // `immediate` should be false when invoked from the button click.
  const authData = {
    client_id: config.GOOGLE_API_CLIENT_ID,
    scope: SCOPES,
    immediate: immediate
  };

  return gapi.auth.authorize(authData);
}


function loadClient() {
  const loadAnalytics = gapi.client.load('analytics', 'v3');
  const loadAdsense = gapi.client.load('adsense', 'v1.4');
  return new Promise.all([loadAnalytics, loadAdsense]);
}


function handle(response) {
  // refresh token before expire 1 minute
  const refreshTokenPeriod = (response.expires_in - 60) * 1000;
  setTimeout(() => {
    authorize(true);
  }, refreshTokenPeriod);
  return response;
}


export function authorize(immediate = false) {
  return new Promise((resolve, reject) => {
    requestAuthorization(immediate).then(response => {
      loadClient().then(() => {
        resolve(handle(response));
      }, () => {
        reject(new Error('Google API load failure!'));
      });
    }, () => {
      reject(new Error('Google API authorize failure!'));
    });
  });
}


export function login() {
  return new Promise((resolve, reject) => {
    hasAPI(() => {
      authorize(true).then(result => {
        resolve(result);
      }, err => {
        reject(err);
      });
    });
  });
}
