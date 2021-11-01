/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteStoreModel } from './contract/favoriteRestaurantContract';

let favoriteStores = [];

const FavoriteStoreArray = {

  getStore(id) {
    if (!id) {
      return;
    }

    return favoriteStores.find((restaurant) => restaurant.id == id);
  },

  getAllStores() {
    return favoriteStores;
  },

  putStore(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteStores
    if (this.getStore(restaurant.id)) {
      return;
    }

    favoriteStores.push(restaurant);
  },

  deleteStore(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteStores = favoriteStores.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Store Array Contract Test Implementation', () => {
  afterEach(() => favoriteStores = []);

  itActsAsFavoriteStoreModel(FavoriteStoreArray);
});
