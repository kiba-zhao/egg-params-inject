/**
 * @fileOverview 默认配置文件
 * @name config.default.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

module.exports = () => {

  const exports = {};
  const headers = ["headers"];

  exports.paramsInject = {
    appId: [...headers, "App-ID".toLowerCase()],
    authId: [...headers, "Auth-ID".toLowerCase()]
  };

  return exports;

};
