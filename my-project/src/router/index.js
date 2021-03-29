import Vue from 'vue'
import Router from 'vue-router'
import Context from '../views/Context'
import Hello from '../views/HelloWorld'
import NaviBar from '../components/NaviBar'
import Login from '../views/user/login'
import Register from '../views/user/register'
import App from '../App.vue'
import Manage from '../views/manage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/context',
            component: Context
        },
        {
            path: '/',
            component: Manage
        },
        {
            path: '/navi',
            component: NaviBar
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