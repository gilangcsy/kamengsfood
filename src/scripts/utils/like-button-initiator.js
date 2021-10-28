import FavoriteStoreIdb from '../data/favorite-store-idb';
import {
	createLikeButtonTemplate,
	createLikedButtonTemplate
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
	async init({
		likeButtonContainer,
		data
	}) {
		this._likeButtonContainer = likeButtonContainer;
		this._store = data.restaurant;

		await this._renderButton();
	},

	async _renderButton() {
		const {
			id
		} = this._store;

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
		this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteStoreIdb.putStore(this._store);
			this._renderButton();
		});
	},

	_renderLiked() {
		this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

		const likeButton = document.querySelector('#likeButton');
		likeButton.addEventListener('click', async () => {
			await FavoriteStoreIdb.deleteStore(this._store.id);
			this._renderButton();
		});
	},
};

export default LikeButtonInitiator;