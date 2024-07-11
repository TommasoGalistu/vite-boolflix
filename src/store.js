import { reactive } from 'vue'

export const store = reactive({
    isSearch: true,
    urlRichiestaFilm: 'https://api.themoviedb.org/3/search/movie?api_key=d88368d4154d811ca55ecb6c775a934b&query=',
    urlRichiestaSerie: 'https://api.themoviedb.org/3/search/tv?api_key=d88368d4154d811ca55ecb6c775a934b&language=it_IT&query=',
    inputUtente: 'ritorno',
    arrayFilm: [],
    arraySerie: [],
});
