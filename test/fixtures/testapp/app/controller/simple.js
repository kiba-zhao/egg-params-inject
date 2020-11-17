/**
 * @fileOverview 示例控制器
 * @name simple.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { Controller } = require('egg');

class SimpleController extends Controller {

  async index() {

    const { ctx } = this;
    ctx.body = ctx.params;
    ctx.status = 200;

  }

}

module.exports = SimpleController;
