import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foto from "../views/Foto.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/foto",
        name: "Foto",
        component: Foto,
        meta: {
            title: "Foto",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | IstiBlogs`;
    next();
});

export default router;
