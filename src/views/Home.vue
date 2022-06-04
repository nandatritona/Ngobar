<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
                blogCoverPhoto: 'beatiful-stories',
            },
            {
                title: 'This a filter blog post title!',
                blogHtml: 'This a filter blog post title!',
                blogCoverPhoto: 'designed-for-everyone',
            },
        ],
    };
  },
};
</script>
