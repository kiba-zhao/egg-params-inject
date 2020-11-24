/**
 * @fileOverview params注入中间建
 * @name paramsInject.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';
const { get } = require('lodash');

module.exports = opts => {
  const injectParams = opts || {};

  return async (ctx, next) => {
    const params = ctx.params || {};
    for (let key in injectParams) {

      let paths = injectParams[key];
      let value = get(ctx, paths);
      if (value)
        params[key] = value;

    }

    ctx.params = params;
    await next();

  };

};
