import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({
    likeButtonContainer,
    detailRestaurant,
    favoriteStore,
  }) {
    this._likeButtonContainer = likeButtonContainer;
    this._store = detailRestaurant;
    this._favoriteRestaurants = favoriteStore;

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
    const store = await this._favoriteRestaurants.getStore(id);
    return !!store;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putStore(this._store);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteStore(this._store.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
