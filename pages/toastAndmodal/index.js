Page({
    data: {
        animationData: {}
    },
    showToast: function(){
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 4000,
            mask: true
        })
    },
    showModal: function() {
        wx.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
    },
    actionSheet: function() {
        wx.showActionSheet({
          itemList: ['A', 'B', 'C'],
          success: function(res) {
            console.log(res.tapIndex)
          },
          fail: function(res) {
            console.log(res.errMsg)
          }
        })
    },
    onShow: function(){
        var animation = wx.createAnimation({
          duration: 1000,
            timingFunction: 'ease',
        })

        this.animation = animation

        // animation.scale(2,2).rotate(45).step()

        // this.setData({
        //   animationData:animation.export()
        // })

        // setTimeout(function() {
        //   animation.translate(30).step()
        //   this.setData({
        //     animationData:animation.export()
        //   })
        // }.bind(this), 1000)
    },
    rotateAndScale: function () {
        // 旋转同时放大
        this.animation.rotate(45).scale(2, 2).step()
        this.setData({
          animationData: this.animation.export()
        })
      },
    rotateThenScale: function () {
        // 先旋转后放大
        this.animation.rotate(-45).step()
        this.animation.scale(0.5, 0.5).step()
        this.setData({
          animationData: this.animation.export()
        })
    },
    rotateAndScaleThenTranslate: function () {
        // 先旋转同时放大，然后平移
        this.animation.rotate(45).scale(2, 2).step()
        this.animation.translate(100, 100).step({ duration: 1000 })
        this.setData({
          animationData: this.animation.export()
        })
    }
})