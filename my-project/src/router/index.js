import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/user/login'
import Register from '../views/user/register'
import Manage from '../views/manage'
import Community from '../views/community'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Community
        },
        {
            path:'/user/login',
            component: Login
        },
        {
            path:'/user/register',
            component: Register
        },
        {
            path:'/manage',
            component: Manage
        }
    ]
})