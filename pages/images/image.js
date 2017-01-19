
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}


Page({
    data:{
        src: '',
        src_2: ''
    },
    chooseImage: function(){
        var that = this;
        wx.chooseImage({
            success: function (res) {
                that.setData({
                    src: res.tempFilePaths[0]
                });
                wx.previewImage({
                    urls:[res.tempFilePaths[0]]
                });
                wx.getImageInfo({
                  src: res.tempFilePaths[0],
                  success: function (res) {
                    console.log(res.width)
                    console.log(res.height)
                  }
                })
            }
        });
    },

    bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
      camera: 'back',
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    },
    onReady: function (res) {
      this.videoContext = wx.createVideoContext('myVideo')
    },
    inputValue: '',
    bindInputBlur: function(e) {
        this.inputValue = e.detail.value
    },
    bindSendDanmu: function () {
        this.videoContext.sendDanmu({
          text: this.inputValue,
          color: getRandomColor()
        })
    }
})