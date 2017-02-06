const item = [
  {
    title:'元祖 清风有信(8寸)',
    price:'￥288',
    img:'http://img01.hua.com/uploadpic/newpic/5302071.jpg_220x240.jpg',
    id:'1'
  },
  {
    title:'元祖 玫瑰圆舞曲(10寸)',
    price:'￥288',
    img:'http://img01.hua.com/uploadpic/newpic/5303069.jpg_220x240.jpg',
    id:'2'
  },
  {
    title:'元祖 莫尔卡夫(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302071.jpg_220x240.jpg',
    id:'3'
  },
  {
    title:'元祖 情有独钟(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302066.jpg_220x240.jpg',
    id:'4'
  },
  {
    title:'元祖 黄金燕麦香芋(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302064.jpg_220x240.jpg',
    id:'5'
  },
  {
    title:'元祖 爱的种子(8寸)',
    price:'￥239',
    img:'http://img01.hua.com/uploadpic/newpic/5302063.jpg_220x240.jpg',
    id:'6'
  },
  {
    title:'元祖 清风有信(8寸)',
    price:'￥288',
    img:'http://img01.hua.com/uploadpic/newpic/5302071.jpg_220x240.jpg',
    id:'1'
  },
  {
    title:'元祖 玫瑰圆舞曲(10寸)',
    price:'￥288',
    img:'http://img01.hua.com/uploadpic/newpic/5303069.jpg_220x240.jpg',
    id:'2'
  },
  {
    title:'元祖 莫尔卡夫(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302068.jpg_220x240.jpg',
    id:'3'
  },
  {
    title:'元祖 情有独钟(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302066.jpg_220x240.jpg',
    id:'4'
  },
  {
    title:'元祖 黄金燕麦香芋(8寸)',
    price:'￥218',
    img:'http://img01.hua.com/uploadpic/newpic/5302064.jpg_220x240.jpg',
    id:'5'
  },
  {
    title:'元祖 爱的种子(8寸)',
    price:'￥239',
    img:'http://img01.hua.com/uploadpic/newpic/5302063.jpg_220x240.jpg',
    id:'6'
  }
]

module.exports = {
  api: '/api/cake',
  response: function (req, res) {
    res.send(item);
  }
}