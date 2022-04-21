// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

let list = null

// 云函数入口函数
exports.main = async (event, context) => {
  return list = db.collection('testRank').orderBy('totalDamage', 'desc').get({
    // success: res => {
    //         list: res.result
    //     }
  })
}