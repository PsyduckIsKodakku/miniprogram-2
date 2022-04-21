// miniprogram/pages/paihang/paihang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTapUpload: function () {
    wx.navigateTo({
      url: '../paihang/paihangUp/paihangUp',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onTapReset: function () {
    wx.cloud.callFunction({
      name: 'reset',
      success: res => {
        console.log('reset success')
      }
    })
  },
  onLoad: function (options) {
    var that = this
    wx.stopPullDownRefresh()
    wx.cloud.init({
      env: 'princess-tv3rl',
      traceUser: true
    });
    const db = wx.cloud.database()
    // db.collection('testRank').orderBy('totalDamage', 'desc').get({
    //   success: res => {
    //     this.setData({
    //       testRank: res.data
    //     })
    //   }
    // })
    wx.cloud.callFunction({
      name: 'getList',
      success: res => {
        that.setData({
          testRank: res.result.data
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
    this.onLoad();
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