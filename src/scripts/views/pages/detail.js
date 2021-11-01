/* eslint-disable no-tabs */
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createDetailRestaurantTemplate,
}
  from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
		<article id="detail">
            
        </article>
		<div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurants(url.id);
    const detailRestaurantContainer = document.querySelector('#detail');
    detailRestaurantContainer.innerHTML = createDetailRestaurantTemplate(data.restaurant);

    const detailRestaurant = data.restaurant;

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      detailRestaurant,
    });
  },
};

export default Detail;
