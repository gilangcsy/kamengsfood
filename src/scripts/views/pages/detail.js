import RestaurantSource from "../../data/restaurant-source";
import UrlParser from '../../routes/url-parser';
import {
	createDetailRestaurantTemplate,
	createLikeButtonTemplate
}
from '../templates/template-creator';
import FavoriteStoreIdb from '../../data/favorite-store-idb';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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

		console.log(data.restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			data,
		});
	},
};

export default Detail;