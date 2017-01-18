## 微信小程序示例demo持续更新中
# 微信官方文档https://mp.weixin.qq.com/cgi-bin/wx
个人用户可以申请小程序开发，不审核即可。

pages/api 为http请求
pages/socket 为websocket实现，服务器端node可以使用ws库，使用socket.io库有bug, Websocket-verison版本不支持，微信小程序支持最新版本13。

本地服务器http请求测试，需要把开发者环境不校验请求域名及TLS版本选项勾选上。。