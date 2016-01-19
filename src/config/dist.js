'use strict';

import baseConfig from './base';

const GOOGLE_ANALYTICS_ACCOUNTS = [
  {
    id: '55012181',
    properties: [
      {
        id: 'UA-55012181-3',
        name: 'Con là tất cả',
        websiteUrl: 'http://conlatatca.vn',
        defaultProfileId: '100697044'
      },
      {
        id: 'UA-55012181-7',
        name: 'Mang thai lần đầu',
        websiteUrl: 'http://mangthailandau.com',
        defaultProfileId: '111505121'
      },
      {
        id: 'UA-55012181-8',
        name: 'Nhật ký nuôi con',
        websiteUrl: 'http://nhatkynuoicon.com',
        defaultProfileId: '113933233'
      },
      {
        id: 'UA-70242167-1',
        name: '40 tuần thai',
        websiteUrl: 'http://40tuanthai.com',
        defaultProfileId: '111940504'
      }
    ]
  }
];

let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  GOOGLE_API_CLIENT_ID: '60820199865-7i5o4rj2d7c0oduulugfdt2r02prje3f.apps.googleusercontent.com',
  GOOGLE_ANALYTICS_ACCOUNTS: GOOGLE_ANALYTICS_ACCOUNTS,
  OVERVIEW_ACTIVE_USERS_REFRESH_PERIOD: 10 * 1000, // 10 second
  OVERVIEW_ADSENSE_REPORTS_REFRESH_PERIOD: 60 * 1000 // 60 second
};

export default Object.freeze(Object.assign({}, baseConfig, config));

