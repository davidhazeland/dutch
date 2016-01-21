import Firebase from 'firebase';
import Promise from 'bluebird';

import config from 'config';
import {fetch as fetchActiveUsers} from '../gapi/ActiveUsers';


function read(ref) {
  return new Promise((resolve, reject) => {
    ref.once('value', snap => {
      const activeUser = snap.val();

      const now = Date.now();
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


function write(ref, response) {
  ref.set({
    updatedAt: Date.now(),
    response: response
  });
}


export function fetch(account) {
  return new Promise((resolve, reject) => {
    const url = `https://dutch-app.firebaseio.com/analytics/activeUser/${account.id}`;
    const activeUserRef = new Firebase(url);

    read(activeUserRef).then(({isExpired, cachedResponse}) => {
      if (isExpired) {

        return fetchActiveUsers(account).then(response => {
          write(activeUserRef, response);
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
