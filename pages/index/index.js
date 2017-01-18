//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../helloWorld/index'
    })
  },
  swiper: function() {
    wx.navigateTo({
      url: '../swiper/index'
    });
  },
  form: function(){
    wx.navigateTo({
      url:'../form/index'
    })
  },
  form2: function(){
    wx.navigateTo({
      url:'../form/form2'
    })
  },
  form3: function() {
    wx.navigateTo({
      url:'../form/form3'
    });
  },
  request: function(){
    wx.navigateTo({
      url:'../api/request'
    });
  },
  socket: function(){
    wx.navigateTo({
      url: '../socket/index'
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
