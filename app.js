/**
 * @fileOverview 插件入口
 * @name app.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const MW_NAME = 'paramsInject';
const STATIC = 'static';

module.exports = app => {

  const inject = app.config.paramsInject || {};
  if (Object.keys(inject).length > 0)
    setupMiddleware(app);

};

function setupMiddleware(app) {

  const index = app.config.coreMiddleware.indexOf(STATIC);
  if (index === -1) {
    app.config.coreMiddleware.push(MW_NAME);
  } else {
    app.config.coreMiddleware.splice(index + 1, 0, MW_NAME);
  }

}
