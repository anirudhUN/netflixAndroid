// const API_KEY="243e4c829c03af820debe020b717349b";

//genre/movie/list

const requests={
    fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=243e4c829c03af820debe020b717349b&language=en-US`,
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=243e4c829c03af820debe020b717349b&with_networks=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=243e4c829c03af820debe020b717349b&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b&with_genres=99`,
    fetchGenres:`https://api.themoviedb.org/3/genre/movie/list?api_key=243e4c829c03af820debe020b717349b`,
    fetchTvSeries:`https://api.themoviedb.org/3/tv/top_rated?api_key=243e4c829c03af820debe020b717349b&language=en-US&page=1%27`,
    fetchTvOnTheAir:`https://api.themoviedb.org/3/tv/on_the_air?api_key=243e4c829c03af820debe020b717349b&language=en-US&page=1`,
    fetchTvAiringToday:`https://api.themoviedb.org/3/tv/airing_today?api_key=243e4c829c03af820debe020b717349b&language=en-US&page=1`,
    fetchGenreList:`https://api.themoviedb.org/3/genre/movie/list?api_key=243e4c829c03af820debe020b717349b`,
    fetchTvPopular:`https://api.themoviedb.org/3/tv/popular?api_key=243e4c829c03af820debe020b717349b&language=en-US&page=1`,
    fetchAll:`https://api.themoviedb.org/3/discover/movie?api_key=243e4c829c03af820debe020b717349b`
}

export default requests;