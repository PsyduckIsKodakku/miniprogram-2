Page({
  onTapThree: function () {
    wx.navigateTo({
      url: '../hedao/hedao-three/hedao-three',
    })
  },
  onTapTwo: function () { 
    wx.navigateTo({
      url: '../hedao/hedao-two/hedao-two',
    })
  },
  onTapOne: function () {
    wx.navigateTo({
      url: '../hedao/hedao-one/hedao-one',
    })
  },
  onTapJump: function() {
    wx.navigateTo({
      url: '../hedao/hedao-explain/hedao-explain',
    })
  }
})