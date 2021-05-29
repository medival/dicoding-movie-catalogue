/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */

import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
		<h2> Now Playing Page </h2>
	`;
  },
	
  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
    
    // TODO: show movie with DOM
  },
}

export default NowPlaying;
