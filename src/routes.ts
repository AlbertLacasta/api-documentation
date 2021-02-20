import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
      path: "/",
      redirect: "/home"
    },
    {
        meta: { title: "Home", conditionalRoute:true },
        path: '/home',
        name: 'home',
        component: () => import('@/main/views/home/HomePage.vue')
    },
    {
        meta: { title: "Inspector", conditionalRoute:true },
        path: '/api-docs',
        name: 'inspector',
        component: () => import('@/main/views/inspector/InspectorPage.vue')
    }
];

/**
 *
 */
const router = new VueRouter({
    routes
} as any);


export default router;
