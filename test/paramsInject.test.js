/**
 * @fileOverview 功能测试
 * @name paramsInject.test.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const mock = require('egg-mock');

describe('test/paramsInject.test.js', () => {

  let app;
  before(() => {
    app = mock.app({
      baseDir: 'testapp',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);


  it('simple success', async () => {

    const params = { appId: 'appId', authId: 'authId' };

    await app.httpRequest()
      .get('/simple')
      .set('Accept', 'application/json')
      .set('App-ID', params.appId)
      .set('Auth-ID', params.authId)
      .set('Client-Name', 'client1')
      .expect(200, params);

  });

});
