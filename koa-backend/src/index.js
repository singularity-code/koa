const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

// get, post, put, delete
router.use('/api', api.routes());

// apply router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000');
});
