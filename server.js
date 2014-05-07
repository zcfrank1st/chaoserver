var server = require('connect');
var hive = require('./service/hive');

// config
var port = 3000;
var ip = '';

var hive_Cli = hive.HiveCli();

function logger (req, res, next) {
  // TODO 初始化log
  next();
}

function query_hive (req, res, next) {
  // TODO 从req当中获取 查询sql
  var sql = '';
  
  var hivecli = new hive();
  hivecli.query(sql);
  next();
}

// TODO 实现静态服务器是基本功能，同时通过编写插件可以调用hive
server()
  .use(logger)
  .use('/hive/exec', query_hive)
  .listen(port, function () {
    console.log("chaoserver is running at port " + port);
  });