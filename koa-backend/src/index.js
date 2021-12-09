const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  console.log(ctx.url);
  console.log(1);
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    ctx.throw(401, 'Unauthorized');
  }
  await next();
  console.log('END')
  // without await
  //   next().then(() => {
  //     console.log('END');
  //   });
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx, next) => {
  console.log('hi');
});

app.listen(4000, () => {
  console.log('server is running at http://localhost:4000');
});
