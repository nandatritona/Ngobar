<template lang="">
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" :to="{ name: 'Home' }">IstiBlogs</router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile">
                    <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                    <router-link class="link" to="#">Tips And Triks</router-link>
                    <router-link class="link" to="#">Donasi</router-link>
                    <router-link class="link" to="#">Articles</router-link>
                    <router-link class="link" :to="{ name: 'Foto'}">Foto</router-link>
                    <router-link class="link" to="#">Tonton video</router-link>
                    <router-link class="link" to="#">Login or Register</router-link>
                </ul>
            </div>
        </nav>
        <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link" to="#">Tips And Triks</router-link>
                <router-link class="link" to="#">Donasi</router-link>
                <router-link class="link" to="#">Articles</router-link>
                <router-link class="link" :to="{ name: 'Foto'}">Foto</router-link>
                <router-link class="link" to="#">Video</router-link>
                <router-link class="link" to="#">Login or Register</router-link>
            </ul>
        </transition>
    </header>
</template>
<script>
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'navigation',
    components: {
        menuIcon
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },
};
</script>
<style lang="scss" scoped>
    header {
        background-color: aliceblue;
        // background-color: rgb(0, 100, 100);
        padding: 0 25px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        z-index: 99;
        .link {
            font-weight: 500;
            padding: 0 8px;
            transition: 0.3s color ease;

            &:hover {
                color: #1eb8b8;
            }
        }

        nav {
            display: flex;
            padding: 25px 0;

            .branding {
                // flex: 1;
                display: flex;
                align-items: center;
                // justify-content: center; 

                .header {
                    font-size: 26px;
                    font-weight: 600;
                    color: #1eb8b8;
                    text-decoration: none;
                    // transition: 0.3s color ease;

                    // &:hover {
                    //     color: #000000;
                    // }
                }
            }
            .nav-links {
                position: relative;
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: flex-end;
                ul {
                    margin-right: 32px;
                    .link {
                        margin-right: 32px;
                    }
                    .link:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        .menu-icon {
            cursor: pointer;
            position: absolute;
            top: 32px;
            right: 25px;
            height: 25px;
            width: auto;
        }
        .mobile-nav {
            padding: 20px;
            width: 70%;
            max-width: 250px;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100%;
            background-color: #303030;
            top: 0;
            left: 0;
            .link {
                padding: 15px;
                color: #fff;
                &:hover {
                    color: #1eb8b8;
                }
            }
        }
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: all 1s ease;
        }
        .mobile-nav-enter {
            transform: translateX(-250px);
        }
        .mobile-nav-enter-to {
            transform: translateX(0);
        }
        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }
        // .mobile-nav-leave-to {
        //     transform: translateX(-250px);
        // }
    }
</style>