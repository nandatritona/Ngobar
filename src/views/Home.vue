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
    </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
import BlogCards from '../components/BlogCard';

export default {
    name: "Home",
    components: { BlogPost, BlogCards },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome!",
                blogPost: "Sedang Dalam Tahap Pengembangan !!",
                welcomeScreen: true,
                photo: "coding",
            },
            sampleBlogPost: [
                {
                    title: 'This a filter blog post title!',
                    blogHtml: 'This a filter blog post title!',
                    blogCoverPhoto: 'beautiful-stories',
                },
                {
                    title: 'This a filter title2!',
                    blogHtml: 'This a filter title!',
                    blogCoverPhoto: 'designed-for-everyone',
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
    
</style>
