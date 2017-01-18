var msg = '';
Page({
    data: {
        msg: msg
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
        
    }
})