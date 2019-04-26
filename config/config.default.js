/* eslint valid-jsdoc: "off" */

'use strict';
// const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // add middleware robot
  config.middleware = [
    'robot',
  ];
  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556211666528_464';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
