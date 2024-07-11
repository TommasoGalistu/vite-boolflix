import { reactive } from 'vue'

export const store = reactive({
    isSearch: true,
    urlRichiesta: 'https://api.themoviedb.org/3/search/movie?api_key=d88368d4154d811ca55ecb6c775a934b&query=ritorno',
    arrayVideo: [],
});
