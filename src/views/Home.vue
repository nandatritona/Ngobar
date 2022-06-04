<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost';

export default {
  name: "Home",
  components: { BlogPost },
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
                title: 'This a filter blog post title2!',
                blogHtml: 'This a filter blog post title!',
                blogCoverPhoto: 'designed-for-everyone',
            },
        ],
    };
  },
};
</script>
