require('babel-core/register');
const Koa = require('koa');
const fs = require('fs');
const mongoose = require('mongoose');
const http = require('http');
const https = require('https');
const bodyParser = require('koa-bodyparser')
const controller = require('./src/controller');
const config = require('./src/config');

// start
const app = new Koa();
//连接数据库
mongoose.connect(config.dbPath);
var db = mongoose.connection;
db.on('error', console.error.bind(console, `${config.dbPath} : 连接失败 :(`));
db.once('open', function () {
    console.log(`${config.dbPath} : 连接成功 :)`)
});
// log request URL:
app.use(async (ctx, next) => {
    console.log(`[${new Date()}] : # ${ctx.request.method} => ${ctx.request.url}`);
    await next();
});
// parse request body:
app.use(bodyParser());
// app.use(router.allowedMethods());
app.use(controller());
//http/https
http.createServer(app.callback()).listen(config.httpPort);
https.createServer(app.callback()).listen(config.httpsPort);
console.log(` #### app started at port ${config.httpPort} [http] / ${config.httpsPort} [https] ####`);







