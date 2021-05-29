/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */

import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
		<h2> Upcoming page </h2>
	`;
  },
	
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);
    
    // TODO: show movies with DOM
  },
};

export default Upcoming;
