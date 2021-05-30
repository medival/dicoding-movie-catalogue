/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-tabs */

import TheMovieDbSource from '../../data/themoviedb-source';
import UrlPasrser from '../../routes/url-parser';
import { createMovieDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
	`;
  },

  async afterRender() {
    const url = UrlPasrser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
