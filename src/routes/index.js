/**
 * @file
 * Created by hanan on 16/10/15.
 */
const NotFound = r => require(['views/notfound'], r);
const firstPage = r => require(['views/first_page/index'],r);
const flower = r => require(['views/flower/index'],r);
const cake = r => require(['views/cake/index'],r);
// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {
   path: '', 
   redirect: {name: 'firstPage'}
  },{
  path: '/', 
  component: firstPage, 
  name: 'firstPage'
  },{
   path: '/flower',
   component: flower, 
   name: 'flower'
  },{
  path: '/cake', 
  component: cake, 
  name: 'cake'}
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
