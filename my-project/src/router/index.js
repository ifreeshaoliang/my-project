import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);


export default new Router({
    routes: [
        //主页面
        {
            path: '/',
            component: () => import('../views/community')
        },
        //测试页面
        {
            path: '/test',
            component: () => import('../views/test')
        },
        //导航栏-导航到的页面
        {
            path:'/user',
            component: () => import('../views/user')
        },
        {
            path:'/seller',
            component: () => import('../views/seller')
        },
        {
            path:'/priceComparison',
            component: () => import('../views/priceComparison')
        },
        //其他页面
        {
            path: '/writeAticle',
            component: () => import('../views/writeArticle')
        },
        {
            path:'/manage',
            component: () => import('../views/manage/index.vue')
        },
        //输入错误的地址返回首页
        {
            path: '/*',
            component: () => import('../views/community')
        },
    ]
})