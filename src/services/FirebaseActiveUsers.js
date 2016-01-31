import Firebase from 'firebase';
import Promise from 'bluebird';

import config from 'config';

function isExpired(updatedAt, now) {
  return (parseInt(now) - parseInt(updatedAt) > config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD);
}


function read(ref, now) {
  return new Promise((resolve, reject) => {
    ref.once('value', snap => {
      const activeUser = snap.val();
      const invalidateResponse = !activeUser || isExpired(activeUser.updatedAt, now);

      if (invalidateResponse) {
        resolve({
          invalidateResponse: true,
          cachedResponse: null
        });
      } else {
        resolve({
          invalidateResponse: false,
          cachedResponse: activeUser.data
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
    data: response
  });
}


export const cache = request => account => {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    const url = `https://dutch-app.firebaseio.com/analytics/activeUser/${account.id}`;
    const activeUserRef = new Firebase(url);

    read(activeUserRef, now).then(({invalidateResponse, cachedResponse}) => {
      if (invalidateResponse) {
        return request(account).then(response => {
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
};
