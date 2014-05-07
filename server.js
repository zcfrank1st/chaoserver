var server = require('connect');

function test (req, res, next) {
  res.end("hello world");
  next();
}


// TODO 实现静态服务器是基本功能，同时通过编写插件可以调用hive
server()
  .use(test)
  .listen(3000, function () {
    console.log("chaoserver is running~");
  });