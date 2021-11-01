/* eslint-disable no-tabs */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
        <article id="catalog">
            <div class="row"">
                <div class="column">
                    <div class="header-text">
                        EXPLORE RESTAURANT
                    </div>
                </div>
            </div>
            <div class="row" id="restaurants">
            </div>
        </article>
    `;
  },

  async afterRender() {
    const data = await RestaurantSource.exploreRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    data.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(resto);
    });
  },
};

export default Explore;
