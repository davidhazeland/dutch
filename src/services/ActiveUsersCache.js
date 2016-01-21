import Firebase from 'firebase';
import Promise from 'bluebird';

import config from 'config';
import {fetch as fetchActiveUsers} from '../gapi/ActiveUsers';


function read(ref, now) {
  return new Promise((resolve, reject) => {
    ref.once('value', snap => {
      const activeUser = snap.val();
      const isExpired = !activeUser || (parseInt(now) - parseInt(activeUser.updatedAt) > config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD);

      if (isExpired) {
        resolve({
          isExpired: true,
          cachedResponse: null
        });
      } else {
        resolve({
          isExpired: false,
          cachedResponse: activeUser.response
        });
      }
    }, err => {
      reject(err);
    });
  });
}


function write(ref, now, response) {
  ref.set({
    updatedAt: now,
    response: response
  });
}


export function fetch(account) {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const url = `https://dutch-app.firebaseio.com/analytics/activeUser/${account.id}`;
    const activeUserRef = new Firebase(url);

    read(activeUserRef, now).then(({isExpired, cachedResponse}) => {
      if (isExpired) {
        return fetchActiveUsers(account).then(response => {
          write(activeUserRef, now, response);
          resolve(response);
        }, err => {
          reject(err);
        });

      } else {
        resolve(cachedResponse);
      }
    }, err => {
      reject(err);
    });
  });
}
