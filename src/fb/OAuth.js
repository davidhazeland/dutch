/* global FB */

import Promise from 'bluebird';
import config from 'config';

const SCOPES = ['ads_management', 'ads_read'];


function init() {
  FB.init({
    appId: config.FACEBOOK_APP_ID,
    xfbml: true,
    version: 'v2.5'
  });
}


function hasAPI(callback) {
  if (typeof (FB) !== 'undefined') {
    init();
    callback();
  }
  else {
    window.setTimeout(function () {
      hasAPI(callback);
    }, 50);
  }
}


export function authorize() {
  return new Promise((resolve, reject) => {
    FB.login(function (response) {
      if (response.authResponse) {
        resolve(response);
      } else {
        reject(new Error('Facebook authorize failure!'));
      }
    }, {scope: SCOPES.join(',')});
  });
}


export function login() {
  return new Promise((resolve, reject) => {
    hasAPI(() => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve(response);
        } else {
          reject(new Error('Facebook login failure!'));
        }
      });
    });

    const timeout = 5000;
    setTimeout(() => {
      reject(new Error('Facebook not response!'));
    }, 5000);
  });
}
