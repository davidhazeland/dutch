/* global FB */

import config from 'config';


function mapStory(data) {
  return data.map(item => {
    return JSON.parse(item.body).link;
  });
}


function batchStory(storyIds) {
  const batch = storyIds.map(id => {
    return {method: 'GET', relative_url: `${id}?fields=link`};
  });
  return new Promise((resolve, reject) => {
    FB.api('/', 'POST', {
      batch: batch,
      include_headers: false
    }, function (response) {
      if (response) {
        resolve(mapStory(response));
      } else {
        reject(response);
      }
    });
  });
}

function mapStoryId(data) {
  return data.map(item => {
    return item.adcreatives.data[0].object_story_id;
  });
}

export function getAdverts(account) {
  return new Promise((resolve, reject) => {
    const url = `/act_${account.id}/ads?fields=adcreatives{object_story_id}`;
    FB.api(url, (response) => {
      if (response && !response.error) {
        const storyIds = mapStoryId(response.data);
        batchStory(storyIds).then(stories => {
          resolve({
            ads: response.data,
            stories: stories
          });
        }, err => {
          reject(err);
        });
      } else {
        reject(response);
      }
    });
  });

}

