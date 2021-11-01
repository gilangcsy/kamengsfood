/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteStoreIdb from '../../src/scripts/data/favorite-store-idb';

const createLikeButtonPresenterWithRestaurant = async (detailRestaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    detailRestaurant,
    favoriteStore: FavoriteStoreIdb,
  });
};

export {
  createLikeButtonPresenterWithRestaurant,
};
