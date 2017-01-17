var order = ['red', 'yellow', 'blue', 'green', 'red'];
var order_H = ['green_H', 'red_H', 'yellow_H', 'blue_H', 'green_H'];
Page({
    data: {
        message: 'what is wrong man?',
        staffA: {
            FirstName: 'li',
            LastName: 'xiong'
        },
        staffB: {
            FirstName: 'xiao',
            LastName: 'xx'
        },
        toView: 'red',
        scrollTop: 100,
        toView_H: 'green_H'
    },
    clickme:  function(e) {
        this.setData ({
            message: '哈哈，no thing wrong'
        });
    },
    onLoad: function() {
        console.log('hello world onload');
    },
    onReady: function(){
        console.log('hello world onready');
    },
    onShow: function() {
        console.log('hello world onshow');
    },
    onHide: function(){
        console.log('hello world onhide');
    },
    onUnload: function(){
        console.log('hello world onunload');
    },
    onPullDownRefresh: function(){
        console.log('hello world onpulldownresh');
    },
    onReashBottom: function() {
        console.log('hello world onreashbottom');
    },
    onShareAppMessage: function(){
        return {
            title: '我的测试页面',
            desc: 'wo de ce shi ye mian',
            path: '/pages/helloWorld/index'
        }
    },

    upper: function(e) {
        console.log(e)
    },
    lower: function(e) {
        console.log(e)
    },
    scroll: function(e) {
        console.log(e)
    },
    tap: function(e) {
        for (var i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
            this.setData({
            toView: order[i + 1]
            })
            break
        }
        }
    },
    tapMove: function(e) {
        this.setData({
        scrollTop: this.data.scrollTop + 10
        })
    },
    tap_H: function() {
        for(var i = 0; i <= order_H.length; ++i) {
            if (order_H[i] === this.data.toView_H) {
                this.setData({
                    toView_H: order_H[i + 1]
                });
                break;
            }
        }
    }
})