# egg-params-inject #
基于[eggjs](https://eggjs.org/zh-cn/index.html)的ctx.params注入插件。该插件用于根据配置中指定路径，从ctx上提取数据，注入为ctx.params对应的属性值．

## 安装 ##
```bash
npm install git://github.com:kiba-zhao/egg-params-inject.git --save
```

## 启用 ##
设置启用plugin: `config/plugin.js`
```javascript
exports.paramsInject = {
  enable:true,
  package:'egg-params-inject'
};
```

## 配置 (可选) ##
配置过滤规则: `config/config.default.js`
```javascript
const headers = ["headers"];

exports.paramsInject = {
    appId: [...headers, "App-ID".toLowerCase()],
    authId: [...headers, "Auth-ID".toLowerCase()]
};
```
上述配置相当于如下代码：

``` javascript
ctx.params.appId = ctx.headers["App-ID".toLowerCase()];
ctx.params.authId = ctx.headers["Auth-ID".toLowerCase()];
```

## 使用 ##

```bash
npm i
npm run dev
```
