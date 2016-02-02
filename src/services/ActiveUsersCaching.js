import Firebase from 'firebase';
import Promise from 'bluebird';

import config from 'config';

const ACTIVE_USER_URL = `${config.FIREBASE_ROOT_URL}/analytics/activeUser`;

function isExpired(updatedAt, now) {
  return (parseInt(now) - parseInt(updatedAt) > config.OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD);
}


function handle(activeUser, now) {
  const invalidateResponse = !activeUser || isExpired(activeUser.updatedAt, now);

  if (invalidateResponse) {
    return {
      invalidateResponse: true,
      cachedResponse: null
    };
  } else {
    return {
      invalidateResponse: false,
      cachedResponse: activeUser.data
    };
  }
}


function read(ref, now) {
  return new Promise((resolve, reject) => {
    ref.once('value', snap => {
      const activeUser = snap.val();
      resolve(handle(activeUser, now));
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
    const url = `${ACTIVE_USER_URL}/${account.id}`;
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
