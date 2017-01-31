const item = [
  {
    title:'元祖蛋糕',
    img:'http://okmtvwn51.bkt.clouddn.com/img/home_nav_002.png',
    sid:'1'
  },
  {
    title:'好利来蛋糕',
    img:'http://okmtvwn51.bkt.clouddn.com/img/home_nav_003.png',
    sid:'2'
  },
  {
    title:'幸福西饼蛋糕',
    img:'http://okmtvwn51.bkt.clouddn.com/img/home_xfxb_01.png',
    sid:'3'
  },
  {
    title:'窝夫小子蛋糕',
    img:'http://okmtvwn51.bkt.clouddn.com/img/home_nav_005.png',
    sid:'4'
  },
  {
    title:'米卡米卡蛋糕',
    img:'http://okmtvwn51.bkt.clouddn.com/img/home_nav_006.png',
    sid:'5'
  },
  {
    title:'Mcake蛋糕',
    img:'  http://okmtvwn51.bkt.clouddn.com/img/cake2_11.png',
    sid:'6'
  },
  {
    title:'Vcake蛋糕',
    img:'  http://okmtvwn51.bkt.clouddn.com/img/cake2_8.png',
    sid:'7'
  },
  {
    title:'诺心蛋糕',
    img:'  http://okmtvwn51.bkt.clouddn.com/img/cake2_9.png',
    sid:'8'
  },
  {
    title:'可颂坊蛋糕',
    img:'  http://okmtvwn51.bkt.clouddn.com/img/cake2_10.png',
    sid:'9'
  }

]

module.exports = {
  api: '/api/indexcake',
  response: function (req, res) {
    res.send(item);
  }
}