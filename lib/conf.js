var fs = require('fs');
var path = require('path');
var os = require('os');

// 请到app.qcloud.com查看您对应的appid相关信息并填充
exports.APPID = '您的APPID';
exports.SECRET_ID = '您的SECRET_ID';
exports.SECRET_KEY = '您的SECRET_KEY';

var ua = function () {
  return 'Qcloud-Cos-Nodejs/' + '1.0.4' + ' (' + os.type() + '; ' + os.platform() + '; ' + os.arch() + ')';
};

// 签名的有效时间
exports.EXPIRED_SECONDS = 60;

exports.recvTimeout = 30000;
exports.USER_AGENT = ua;
exports.API_COS_END_POINT = 'http://10.236.158.47:8000/files/v1/';

// timeout单位秒
exports.setAppInfo = function (appid, secretId, secretKey, timeout) {
  timeout = timeout || 30;
  module.exports.APPID = appid;
  module.exports.SECRET_ID = secretId;
  module.exports.SECRET_KEY = secretKey;
  module.exports.recvTimeout = timeout * 1000;
};
