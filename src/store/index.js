import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCards: [
            {
                blogTitle: "Blog Card #1",
                blogCoverPhoto: "stock-1",
                blogDate: "Jun 5, 2022",
            },
            {
                blogTitle: "Blog Card #2",
                blogCoverPhoto: "stock-2",
                blogDate: "Jun 5, 2022",
            },
            {
                blogTitle: "Blog Card #3",
                blogCoverPhoto: "stock-3",
                blogDate: "Jun 5, 2022",
            },
            {
                blogTitle: "Blog Card #4",
                blogCoverPhoto: "stock-4",
                blogDate: "Jun 5, 2022",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
