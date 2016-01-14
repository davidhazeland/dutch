'use strict';

import baseConfig from './base';

const GOOGLE_ANALYTICS_ACCOUNTS = [
  {
    id: '55012181',
    properties: [
      {
        id: 'UA-55012181-3',
        name: 'Con là tất cả',
        websiteUrl: "http://conlatatca.vn",
        defaultProfileId: '100697044',
        views: [
          {
            id: '100697044'
          }
        ]
      },
      {
        id: 'UA-55012181-7',
        name: 'Mang thai lần đầu',
        websiteUrl: "http://mangthailandau.com",
        defaultProfileId: '111505121',
        views: [
          {
            id: '111505121'
          }
        ]
      },
      {
        id: 'UA-55012181-8',
        name: 'Nhật ký nuôi con',
        websiteUrl: "http://nhatkynuoicon.com",
        defaultProfileId: '113933233',
        views: [
          {
            id: '113933233'
          }
        ]
      }
    ]
  }
];

const FACEBOOK_AD_ACCOUNTS = [
  {
    id: '1380810712227886'
  }
];

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  GOOGLE_API_CLIENT_ID: '60820199865-7tncjaor95g3sdhqe7gcefeobcp1vtn5.apps.googleusercontent.com',
  GOOGLE_ANALYTICS_ACCOUNTS: GOOGLE_ANALYTICS_ACCOUNTS,
  FACEBOOK_APP_ID: '1555318518127539',
  FACEBOOK_AD_ACCOUNTS: FACEBOOK_AD_ACCOUNTS,
  OVERVIEW_REFRESH_PERIOD: 10000
};

export default Object.freeze(Object.assign({}, baseConfig, config));
