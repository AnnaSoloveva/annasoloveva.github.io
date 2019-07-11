import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Users from '@/views/Users.vue'
import Add from '@/views/Add.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/edit',
            name: 'edit',
            props: true ,
            component: Edit
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        }
    ],
    linkActiveClass: "active"
})
