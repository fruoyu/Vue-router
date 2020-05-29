import Vue from 'vue'
import Router from 'vue-router'

//a页面
import a from 'pages/a'
//b页面
import b from 'pages/b'
//c页面
import c from 'pages/c'

Vue.use(Router)



/*
1.
页面js懒加载(减轻页面加载时间)
期初直接import的方式作为路由的component 会将所有js打包为1个app.js
使用 resolve => require(['路径'], resolve),的方式,将会把各个js拆开
https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
注意: 使用resolve的方式会动态插入js/以及css会拆分. 需到webpack中配置

2.
routes中也有钩子函数, beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave
(例子 可用于表单or内容编辑 页面跳转时的提醒)
https://router.vuejs.org/zh-cn/advanced/navigation-guards.html

3.
在路由的集合中使用meta
可以带上信息在 this.$router 进行操作
https://router.vuejs.org/zh-cn/advanced/meta.html

*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      // redirect: '/a',
      component: resolve => {
        require(['components/container'], resolve)
      },
      children: [
          {
            path: '/',
            name: 'A',
            component: resolve => {
            require(['pages/a'], resolve)
          },
            meta: {auth: false}
          },
        {
          path: '/b',
          name: 'B',
          component: resolve => {
            require(['pages/b'], resolve)
          },
          // alias: '/c'
        },
        {
          path: '/c',
          name: 'C',
          component: resolve => {
            require(['pages/c'], resolve)
          },
        },
      ]
    },
    {
      path: '/echartsMap',
      name: 'EchartsMap',
      component: resolve => {
        require(['pages/echartsMap'], resolve)
      }
    },
    {
      path: '/404',
      name: '404',
      component: resolve => {
        require (['pages/404'], resolve)
      },
      hidden: true
    },
    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
})
