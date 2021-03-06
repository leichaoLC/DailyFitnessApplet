Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    // this.animation1 = animation1

    //效果
    // animation1.translateX(350).step()

    this.setData({
      animationData1: animation.export()
    })

    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData1: animation.export()
      })
    }.bind(this), 500)


    this.setData({
      animationData2: animation.export()
    })

    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData2: animation.export()
      })
    }.bind(this), 1000)


    this.setData({
      animationData3: animation.export()
    })

    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData3: animation.export()
      })
    }.bind(this), 1500)


    this.setData({
      animationData4: animation.export()
    })

    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationData4: animation.export()
      })
    }.bind(this), 2000)
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