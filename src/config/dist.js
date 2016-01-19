'use strict';
import baseConfig from './base';
const GOOGLE_ANALYTICS_ACCOUNTS = [
  {
    id: '68086179',
    properties: [
      {
        id: 'UA-68086179-8',
        name: 'Trending Thing',
        websiteUrl: 'http://trendingthing.com',
        defaultProfileId: '110844421'
      },
      {
        id: 'UA-68086179-9',
        name: 'So Viral',
        websiteUrl: 'http://soviral.org',
        defaultProfileId: '111365395'
      }
    ]
  }
];
let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  GOOGLE_API_CLIENT_ID: '12612345846-cqd4m3unrn4qdadelegine1pab9155e9.apps.googleusercontent.com',
  GOOGLE_ANALYTICS_ACCOUNTS: GOOGLE_ANALYTICS_ACCOUNTS,
  OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD: 10 * 1000, // 10 second
  OVERVIEW_ADSENSE_REPORTS_REFRESH_PERIOD: 60 * 1000 // 60 second
};
export default Object.freeze(Object.assign({}, baseConfig, config));
