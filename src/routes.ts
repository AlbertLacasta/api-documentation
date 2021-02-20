import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        meta: { title: "Inspector", conditionalRoute:true },
        path: '/',
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
