Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_id = options.id;
    var that = this
    var detailsData
    wx.cloud.init({
      env: 'princess-tv3rl',
      traceUser: true
    });
    const db = wx.cloud.database()
    db.collection('posts_key').orderBy('post_id', 'asc').get({
      success: res => {
        detailsData = res.data[post_id];
        this.setData({
          detailsData
        })
      }
    })
    // console.log(post_id);
    this.setData({detailsData});
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