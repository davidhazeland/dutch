/* global gapi */

import async from 'async-q';
import Promise from 'bluebird';
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


function loadAPI() {
  return gapi.client.load('analytics', 'v3');
}


export function authorize() {
  return new Promise((resolve, reject) => {
    async.series([requestAuthorization.call(null, false), loadAPI]).then(response => {
      resolve({
        result: response[0]
      }, err => {
        reject({
          error: err
        });
      });
    });
  });
}


export function signIn() {
  return new Promise((resolve, reject) => {
    hasAPI(() => {
      async.series([requestAuthorization, loadAPI]).then(response => {
        resolve({
          result: response[0]
        });
      }, err => {
        reject({
          error: err
        });
      });
      //Promise.all([requestAuthorization, loadAPI]).then(response => {
      //  resolve(response);
      //}, err => {
      //  reject(err);
      //});
    });
  });
}
