import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foto from "../views/Foto.vue"
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import TipsAndTrik from "../views/TipsAndTrik.vue";
import Donasi from "../views/Donasi.vue";
import Artikel from "../views/Articles.vue";
import Video from "../views/Video.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

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
        path: "/Tips-And-Trik",
        name: "TipsAndTrik",
        component: TipsAndTrik,
        meta: {
            title: "Tips And Triks",
        },
    },
    {
        path: "/donasi",
        name: "Donasi",
        component: Donasi,
        meta: {
            title: "Donasi",
        },
    },
    {
        path: "/articles",
        name: "articles",
        component: Artikel,
        meta: {
            title: "Articles",
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
    {
        path: "/video",
        name: "Video",
        component: Video,
        meta: {
            title: "Video",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register",
        },
    },
    {
        path: "/forgot-password",
        name: "ForgotPassord",
        component: ForgotPassword,
        meta: {
            title: "Forgot Password",
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
