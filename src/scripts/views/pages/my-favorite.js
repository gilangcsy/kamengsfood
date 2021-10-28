import FavoriteStoreIdb from '../../data/favorite-store-idb';
import {
	createRestaurantListTemplate
} from '../templates/template-creator';

const Favorite = {
	async render() {
		return `
          <article id="catalog">
            <div class="row"">
                <div class="column">
                    <div class="header-text">
                        MY FAVORITE
                    </div>
                </div>
            </div>
			<div class="row" id="restaurants">
            </div>
        </article>
        `;
	},

	async afterRender() {
		const stores = await FavoriteStoreIdb.getAllStores();
		const restaurantContainer = document.querySelector('#restaurants');

		stores.forEach((store) => {
			restaurantContainer.innerHTML += createRestaurantListTemplate(store);
		});
	},
};

export default Favorite;