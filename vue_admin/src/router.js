import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            props: true,
            component: () => import('@/views/Edit.vue')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('@/views/Users.vue')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('@/views/Add.vue')
        },
        {
            path: '/phonebook',
            name: 'phonebook',
            component: () => import('@/views/Phonebook.vue')
        }
    ]
})
