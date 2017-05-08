/**
 * @file
 * Created by hanan on 16/10/15.
 */
const NotFound = r => require(['views/notfound'], r);
const firstPage = r => require(['views/first_page/index'],r);
const flower = r => require(['views/flower/index'],r);
const cake = r => require(['views/cake/index'],r);
const login = r => require(['views/login/index'],r);

const my = r => require(['views/my/index'],r);
const flowerlist = r => require(['views/flower_list/index'],r);
const flowerDeatil = r => require(['views/flower_detail/index'],r);
const car = r => require(['views/car/index'],r);
const gift = r => require(['views/gift/index'],r);
const detail = r => require(['views/gift/detail.vue'],r);
const cake_list = r => require(['views/cake_list/index'],r);
const cake_detail = r => require(['views/cake_list/cake_detail.vue'],r);
const dingdan = r => require(['views/dingdan/index'],r);
// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {
   path: '',
   redirect: {name: 'firstPage'}
  },{
      path: '/index',
      component: firstPage,
      name: 'firstPage',
  },{
   path: '/flower',
   component: flower,
   name: 'flower'
  },{
  path: '/cake',
  component: cake,
  name: 'cake'
  },{
  path: '/login',
  component: login,
  name: 'login'
  },{
  path: '/my',
  component: my,
  name: 'my'
  },{
  path: '/flowerlist',
  component: flowerlist,
  name: 'flowerlist'
  },{
  path:'/flowerdeatil',
  component:flowerDeatil,
  name:'flowerdeatil'
  },{
  path:'/car',
  component:car,
  name:'car'
  },,{
  path:'/dingdan',
  component:dingdan,
  name:'dingdan'
  },{
    path:'/gift',
    component:gift,
    name:'gift'
  },{
    path:'/detail',
    component:detail,
    name:'detail'
  },{
    path:'/cakelist',
    component:cake_list,
    name:'cakelist'
  },{
    path:'/cakedetail',
    component:cake_detail,
    name:'cakedetail'
  }
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
