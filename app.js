import Koa from 'koa';
import router from './router'

//http/https
import http from 'http';
import https from 'https';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
// parse request body:
app.use(bodyParser());

app.use(router.routes())

// add controllers:
// app.use(controller());

http.createServer(app.callback()).listen(3011);
https.createServer(app.callback()).listen(3010);
console.log('app started at port 3011...');





