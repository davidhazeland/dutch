/* global FB */

import Promise from 'bluebird';
import config from 'config';

window.fbAsyncInit = function () {
  FB.init({
    appId: config.FACEBOOK_APP_ID,
    xfbml: true,
    version: 'v2.4'
  });
};


const SCOPES = ['ads_management', 'ads_read'];


function hasAPI(callback) {
  if (typeof (FB) !== 'undefined') {
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

    setTimeout(() => {
      reject(new Error('Facebook not response!'));
    }, 3000);
  });
}
