Page({
    data: {
        latitude:'',
        longitude:'',
        speed: '',
        accuracy: ''
    },

    getLocation: function (res) {
        var that = this;
        wx.getLocation({
              type: 'gcj02', //返回可以用于wx.openLocation的经纬度
              success: function(res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(latitude + '    ' + longitude + '    ' + speed + '  '+ accuracy);
                that.setData({
                    latitude: latitude,
                    longitude: longitude,
                    speed: speed,
                    accuracy: accuracy
                });
                wx.openLocation({
                  latitude: latitude,
                  longitude: longitude,
                  scale: 28
                })
              }
        })
          
    },

    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文 
        this.mapCtx = wx.createMapContext('myMap')
    },
      
    getCenterLocation: function () {
        this.mapCtx.getCenterLocation({
          success: function(res){
            console.log(res.longitude)
            console.log(res.latitude)
          }
        })
    },
    moveToLocation: function () {
        this.mapCtx.moveToLocation()
    }
})