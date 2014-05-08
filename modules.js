var self_modules = module.exports;

self_modules.test = function (req, res, next) {
  res.end('hello world');
}