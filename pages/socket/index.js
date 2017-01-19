var msg = '';
Page({
    data: {
        msg: msg,
        path: ''
    },
    socketTest: function(){
        wx.connectSocket({
            url: 'ws://localhost:8080'
        });
        wx.onSocketOpen(function(res) {
            console.log('socket open');
            wx.sendSocketMessage({
                data: 'weixin message send to server',
                success: function(res) {
                    console.log('weixin send message success');
                },
                fail: function(res) {
                    console.log('weixin send message fail');
                }
            });
            wx.onSocketMessage(function(res) {
                console.log('receive message from server ' + res.data);
            });
        });
        wx.onSocketError(function(res) {
            console.log('socket error');
        });
        
    },
    record: function(){
        var that = this;
        wx.startRecord({
            success: function(res){
                var tmpFilePath = res.tmpFilePath;
                console.log(tmpFilePath);
                that.setData({
                    path: tmpFilePath
                });
                wx.playVoice({
                    file: tmpFilePath,
                    complete: function(){
                        console.log('playVoice end');
                    }
                });
            },
            fail: function(res) {
                console.log('录音失败  ' + res);
            }
        });
        setTimeout(function() {
          //结束录音  
          wx.stopRecord()
        }, 10000);
    }
})