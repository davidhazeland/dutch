'use strict';

import baseConfig from './base';

const GOOGLE_ANALYTICS_ACCOUNTS = [
  {
    id: '55012181',
    properties: [
      {
        id: 'UA-55012181-3',
        name: 'Con là tất cả',
        views: [
          {
            id: '100697044'
          }
        ]
      },
      {
        id: 'UA-55012181-7',
        name: 'Mang thai lần đầu',
        views: [
          {
            id: '111505121'
          }
        ]
      },
      {
        id: 'UA-55012181-8',
        name: 'Nhật ký nuôi con',
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
  FACEBOOK_AD_ACCOUNTS: FACEBOOK_AD_ACCOUNTS
};

export default Object.freeze(Object.assign({}, baseConfig, config));
