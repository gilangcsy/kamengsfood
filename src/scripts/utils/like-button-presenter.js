import FavoriteStoreIdb from '../data/favorite-store-idb';
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({
    likeButtonContainer,
    detailRestaurant,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._store = detailRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._store;

    if (await this._isStoreExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isStoreExist(id) {
    const store = await FavoriteStoreIdb.getStore(id);
    return !!store;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteStoreIdb.putStore(this._store);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteStoreIdb.deleteStore(this._store.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
