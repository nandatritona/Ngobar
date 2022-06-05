<template lang="">
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <BlogPost :post="welcomeScreen"/>
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Blogs</h3>
                <div class="blog-cards">
                    <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
                </div>
            </div>
        </div>
        <div class="updates">
            <div class="container">
                <h2>never miss a post. Register for your free account today!</h2>
                <router-link class="router-button" to="#">
                    Register for IstiBlogs<Arrow class="arrow arrow-light" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
import BlogCards from '../components/BlogCard';
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
    name: "Home",
    components: { BlogPost, BlogCards, Arrow },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome!",
                blogPost: "Sedang Dalam Tahap Pengembangan !!",
                welcomeScreen: true,
                photo: "blog-1",
            },
            sampleBlogPost: [
                {
                    title: 'This a filter blog post title!',
                    blogHtml: 'This a filter blog post title!',
                    blogCoverPhoto: 'blog-2',
                },
                {
                    title: 'This a filter title2!',
                    blogHtml: 'This a filter title!',
                    blogCoverPhoto: 'blog-3',
                },
            ],
            sampleBlogCards: [
                { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "Jun 5, 2022" },
                { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "Jun 5, 2022" },
                { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "Jun 5, 2022" },
                { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "Jun 5, 2022" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}

.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }
        .router-button {
            display: flex;
            font-size: 14px;
            text-decoration: none;
            @media (min-width: 800px) {
                margin-left: auto;
            }
        }
        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
    
</style>
