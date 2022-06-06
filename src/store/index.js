import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCards: [
            {
                blogTitle: "Masjid Baiturrahman",
                blogCoverPhoto: "Masjid-1",
                blogDate: "Jun 5, 2022",
                blogAddres: "Banda Aceh",
            },
            {
                blogTitle: "Blog Card #2",
                blogCoverPhoto: "Masjid-2",
                blogDate: "Jun 5, 2022",
                blogAddres: "",
            },
            {
                blogTitle: "Masjid Muslim Rusia",
                blogCoverPhoto: "Masjid-3",
                blogDate: "Jun 5, 2022",
                blogAddres: "bolghar, rusiia",
            },
            {
                blogTitle: "Blog Card #4",
                blogCoverPhoto: "Masjid-4",
                blogDate: "Jun 5, 2022",
                blogAddres: "",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
