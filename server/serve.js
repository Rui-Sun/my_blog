const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');
const page = require("./page.generator.js").page;
const path = require('path');

router.get('/', (ctx, next) => {
  let props = {
    initialCount: 9
  };
  let html = page(props);
  ctx.body = html;
});

app.use(serve(path.join(__dirname, '..', 'public')));

app.use(router.routes());

app.listen(8800);

console.log('app started at port 8800...');