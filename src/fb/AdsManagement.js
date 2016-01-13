/* global FB */

import config from 'config';

function getCampaigns() {
  const uri = `/act_${config.FACEBOOK_AD_ACCOUNT_ID}/ads?fields=adcreatives{object_story_id}`;
  FB.api(
    uri,
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        const stories = response.data.map(item => {
          return item.adcreatives.data[0].object_story_id;
        });
        getStories(stories);
      }
    }
  )
}


function getStories(stories) {
  const batch = stories.map(id => {
    return {method: 'GET', relative_url: `${id}?fields=link`};
  });
  FB.api('/', 'POST', {
    batch: batch,
    include_headers: false
  }, function (response) {
    const links = response.map(item => {
      return JSON.parse(item.body).link;
    });
    console.log(links);
  });
}

