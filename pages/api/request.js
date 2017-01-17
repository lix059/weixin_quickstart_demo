Page({
    data: {
        result:''
    },
    requestTest: function(){
        var that = this;
        wx.request({
            url: 'http://localhost:3000/',
            success: function(res){
                console.log(res);
                that.setData({
                    result: res.data
                });
            },
            fail: function(err){
                console.log(err);
            }
        });
    }
})