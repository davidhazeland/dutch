import _ from 'lodash';
import Promise from 'bluebird';
import {query as queryPageTracking} from '../gapi/PageTracking';
import {getAdverts} from '../fb/AdsManagement';

export function query(adAccount, property, params) {
  return new Promise((resolve, reject) => {
    const pageTrackingPromise = queryPageTracking(property.defaultProfileId, params);
    const advertsPromise = getAdverts(adAccount.id);
    Promise.all([pageTrackingPromise, advertsPromise]).then(result => {
      resolve(mapResult(result, property));
    }, err => {
      reject(err);
    });
  })
}

function mapResult(result, property) {
  return _.filter(result[0].result.rows, function(item) {
    const url = property.websiteUrl + item[0];
    return _.includes(result[1].stories, url);
  });
}
