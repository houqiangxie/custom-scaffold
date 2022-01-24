import { createRouter, createWebHashHistory,createWebHistory,RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/microappchild1/:page*',
        name: 'Child1',
        component: () => import('@/views/child1.vue'),
    },
    {
        path: '/child2/:page*',
        name: 'Child2',
        component: ()=> import('@/views/child2.vue'),
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect:'Index'
    // }
]


export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(import.meta.env.BASE_URL),
//   history: createWebHistory("/custom-scaffold/"),
  routes, // short for `routes: routes`
});