
import Vue from 'vue'
import VueRouter from 'vue-router'

import User from './Page/User.vue'
import Home from './Page/Home.vue'
import Post from './Page/Post.vue'
import Other from './Page/Other.vue'
import Sub1 from './Page/Other/Sub1.vue'
import Sub2 from './Page/Other/Sub2.vue'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
        },
        {
            path: '/user',
            component: User,
            name: 'user',
        },
        {
            path: '/post/:id(\\d+)',
            components: {
                default: Post,
                sidebar: Home
            },
            name: 'post',
        },
        {
            path: '/other',
            // component: resolve => require(['./Page/ExtraPage.vue'], resolve),
            component: Other,
            name: 'other',
            children: [
                {
                    path: 'sub-1',
                    component: Sub1,
                    name: 'home-sub-a',
                },
                {
                    path: 'sub-2',
                    component: Sub2,
                    name: 'home-sub-b',
                },
            ],
        },
        {
            path: '*',
            redirect: '/home',
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(from.name);
    next();
});

export default router;
