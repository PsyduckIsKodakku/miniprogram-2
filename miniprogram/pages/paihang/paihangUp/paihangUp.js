// miniprogram/pages/paihang/paihang.js
wx.cloud.init({
  env: 'princess-tv3rl',
  traceUser: true
});
const db = wx.cloud.database();
const name = db.collection('testRank');
let nickname1 = null
let upId = null
let tD = null
let inputValue1 = 0
let inputValue2 = 0
let inputValue3 = 0
let inputValue5 = 0
let compareValue1 = 0
let compareValue2 = 0
let compareValue3 = 0
let compareValue5 = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue1: 0,
    inputValue2: 0,
    inputValue3: 0,
    inputValue4: 0,
    inputValue5: 0
  },



  bindKeyInput1: function (e) {
    inputValue1 = e.detail.value
    this.setData({
      inputValue1: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    inputValue2 = e.detail.value
    this.setData({
      inputValue2: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    inputValue3 = e.detail.value
    this.setData({
      inputValue3: e.detail.value
    })
  },
  bindKeyInput5: function (e) {
    inputValue5 = e.detail.value
    this.setData({
      inputValue5: e.detail.value
    })
  },
  bindKeyName: function (e) {
    nickname1 = e.detail.value
    this.setData({
      inputNickname: e.detail.value
    })
  },

  onTapCal: function () {
    var int4 = -(-this.data.inputValue1 - this.data.inputValue2 - this.data.inputValue3 - this.data.inputValue5)
    this.setData({
      inputValue4: int4
    })
  },


  res: function (e) {
    let flag = false
    let that = this
    if (e.detail.value.firstDamage == '') {
      inputValue1 = 0
    }
    if (e.detail.value.secondDamage == '') {
      inputValue2 = 0
    }
    if (e.detail.value.thirdDamage == '') {
      inputValue3 = 0
    }
    if (e.detail.value.freeDamage == '') {
      inputValue5 = 0
    }
    wx.cloud.callFunction({
      name: 'getList',
      success: res => {
        let names = res.result.data
        let i = 0
        for (i = 0; i < names.length; i++) {  //遍历数据库对象集合
          if (nickname1 === names[i].nickname) { //用户名存在
            flag = true;
            upId = names[i]._id
            tD = names[i].totalDamage
            compareValue1 = names[i].firstDamage
            compareValue2 = names[i].secondDamage
            compareValue3 = names[i].thirdDamage
            compareValue5 = names[i].freeDamage
          }
        }
        if (flag === true) {    //已注册
          if (inputValue1 == 0 || inputValue1 == '') {

          } else {
            tD = -(- (tD - compareValue1) - e.detail.value.firstDamage)
            name.doc(upId).update({
              data: {
                firstDamage: e.detail.value.firstDamage,
                totalDamage: tD,
              }
            })
            inputValue1 = 0
          }
          if (inputValue2 == 0 || inputValue2 == '') {

          } else {
            tD = -(- (tD - compareValue2) - e.detail.value.secondDamage)
            name.doc(upId).update({
              data: {
                secondDamage: e.detail.value.secondDamage,
                totalDamage: tD,
              }
            })
            inputValue2 = 0
          }
          if (inputValue3 == 0 || inputValue3 == '') {

          } else {
            tD = -(- (tD - compareValue3) - e.detail.value.thirdDamage)
            name.doc(upId).update({
              data: {
                thirdDamage: e.detail.value.thirdDamage,
                totalDamage: tD,
              }
            })
            inputValue3 = 0
          }
          if (inputValue5 == 0 || inputValue5 == '') {

          } else {
            tD = -(- (tD - compareValue5) - e.detail.value.freeDamage)
            name.doc(upId).update({
              data: {
                freeDamage: e.detail.value.freeDamage,
                totalDamage: tD,
              }
            })
            inputValue5 = 0
          }
          upId = null
          wx.showToast({
            title: '修改伤害记录',
          })
        } else {  //未注册
          var abc = -(-e.detail.value.firstDamage-e.detail.value.secondDamage-e.detail.value.thirdDamage-e.detail.value.freeDamage)
          name.add({
            data: {
              firstDamage: e.detail.value.firstDamage,
              secondDamage: e.detail.value.secondDamage,
              thirdDamage: e.detail.value.thirdDamage,
              freeDamage: e.detail.value.freeDamage,
              totalDamage: abc,
              nickname: that.data.inputNickname,
              removeable: true
            },
            success: res => {
              // 在返回结果中会包含新创建的记录的 _id
              this.setData({
                firstDamage: e.detail.value.firstDamage,
                secondDamage: e.detail.value.secondDamage,
                thirdDamage: e.detail.value.thirdDamage,
                freeDamage: e.detail.value.freeDamage,
                totalDamage: e.detail.value
              })
              wx.showToast({
                title: '新增伤害记录',
              })
              console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
            },
            fail: err => {
              wx.showToast({
                icon: 'none',
                title: '新增伤害记录失败'
              })
              console.error('[数据库] [新增记录] 失败：', err)
            }
          })
        }
      }
    })

  },

  uploadDamage() {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      firstDamage: 0,
      secondDamage: 0,
      thirdDamage: 0,
      freeDamage: 0,
      totalDamage: 0
    })
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