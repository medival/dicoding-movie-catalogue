/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */

import TheMovieDbSource from '../../data/themoviedb-source';
import UrlPasrser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
		<h2> Detail Page </h2>
	`;
  },

  async afterRender() {
    const url = UrlPasrser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
    
    // TODO: show movie with DOM
  },
};

export default Detail;
