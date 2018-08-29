// pages/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  all:[],
  // qc:[],
  // bw:[],
  md:[]
  },
  details:function(e){
    wx.navigateTo({
      url: '/pages/details/details?cid='+e.currentTarget.dataset.id
    })
  },
  // qcclass:function(e){
  //   var that = this
  //   wx.request({
  //     url: 'http://starry:81/applet/?qcname=' + e.currentTarget.dataset.id, 
  //     data: {
  //     },
  //     method: 'get',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         all: res.data.r,
  //       })
  //     }
  //   })
  // },
  // bwclass: function (e) {
  //   var that = this
  //   wx.request({
  //     url: 'http://starry:81/applet/?bwname=' + e.currentTarget.dataset.id,
  //     data: {
  //     },
  //     method: 'get',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         all: res.data.r,
  //       })
  //     }
  //   })
  // },
  mdclass: function (e) {
    var that = this
    wx.request({
      url: 'http://starry:81/applet/?mdname=' + e.currentTarget.dataset.id,
      data: {
      },
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          all: res.data.r,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://starry:81/applet', 
      data: {
      },
      method:'get',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          all:res.data.r,
          // qc:res.data.qclist,
          // bw:res.data.bwlist,
          md:res.data.mdlist,
        }) 
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})