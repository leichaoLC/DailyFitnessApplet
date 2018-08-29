// pages/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all: [],
    navData: [{
        text: '看点'
      },
      {
        text: '图片'
      },
      {
        text: '视频'
      },
      {
        text: '体育'
      },
      {
        text: '财经'
      },
      {
        text: '社会'
      },
      {
        text: '科普'
      },
      {
        text: '读报'
      }
    ],
    md: [],
    currentTab: 0,
    navScrollLeft: 0,
    windowWidth: 0,
    windowHeight: 0
  },
  details: function(e) {
    wx.navigateTo({
      url: '/pages/details/details?cid=' + e.currentTarget.dataset.id
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
  mdclass: function(e) {
    var that = this
    wx.request({
      url: 'http://starsky:81/applet/?mdname=' + e.currentTarget.dataset.id,
      data: {},
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
          all: res.data.r,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
          that.setData({
            windowHeight: res.windowHeight,
            windowWidth: res.windowWidth
          })
        },
      }),
      wx.request({
      url: 'http://starsky:81/applet',
        data: {},
        method: 'get',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          that.setData({
            all: res.data.r,
            navData: res.data.mdlist,
            // qc:res.data.qclist,
            // bw:res.data.bwlist,
            // md: res.data.mdlist,
          })
        }
      })

  },
  switchNav: function (event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab: function (event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
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