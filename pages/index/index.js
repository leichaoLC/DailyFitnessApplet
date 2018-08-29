var WXBizDataCrypt = require('../../utils/RdWXBizDataCrypt.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stepnumber:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.login({
      //获取code
      success: function(res) {
        var code = res.code; //返回code
        var appId = 'wx8dfb98d4b98100f1';
        var secret = '4c6a7c58465417a3c6cf0acb5cbbb61a';
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function(res) {
            var session_key = res.data.session_key //返回openid
            console.log(res.data)
            wx.getWeRunData({
              success(res) {
                const encryptedData = res.encryptedData
                var pc = new WXBizDataCrypt(appId, session_key);
                var data = pc.decryptData(encryptedData, res.iv)
                console.log(data)
                for (var i = 0; i < data.stepInfoList.length;i++){
                  data.stepInfoList[i].time=new Date(data.stepInfoList[i].timestamp*1000).toLocaleString().split(" ")[0]
                }
                that.setData({
                  stepnumber: data.stepInfoList,
                })
              }
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})