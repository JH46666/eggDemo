'use strict';


const nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks,
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
