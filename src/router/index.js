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
    },
    {
        path: "/foto",
        name: "Foto",
        component: Foto,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
