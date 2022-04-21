Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  process: function () {
    var date = 'Nov 18 2019';
    // var date_ele = document.getElementById('id');
    // date_ele = date; DOM 优先
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onPostTap: function (event) {
    var post_id = event.currentTarget.dataset.post_id;
    wx.navigateTo({
      url: "../posts/post-detail/post-detail?id=" + post_id
    })
  },

  onLoad: function (options) {
    // var that = this
    // const db = wx.cloud.database()
    // wx.cloud.init({
    //   env: 'princess-tv3rl',
    // });
    // db.collection('posts').doc("testing").get({
    //   success: res => {
    //     that.setData({
    //       posts_key: res.data
    //     })
    //   }
    // })
    var that = this
    wx.stopPullDownRefresh()
    wx.cloud.init({
      env: 'princess-tv3rl',
      traceUser: true
    });
    const db = wx.cloud.database()
    db.collection('posts_key').orderBy('post_id', 'desc').get({
      success: res => {
        this.setData({
          posts_key: res.data
        })
      }
    })
    // this.setData({ posts_key: postData.postList })
  },
  onPullDownRefresh: function () {
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
})