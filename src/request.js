const APIKEY = "452798267a3b523041c9d296f28dc4e6";

const requests = {
  fetchtrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchnetflixoriginals: `/discover/movie?api_key=${APIKEY}&with_networks=213`,
  fetchtoprated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchactionmovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchcomedymovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchhorrormovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchromancemovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchdocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
