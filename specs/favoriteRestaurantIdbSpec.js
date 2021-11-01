import { itActsAsFavoriteStoreModel } from './contract/favoriteRestaurantContract';
import FavoriteStoreIdb from '../src/scripts/data/favorite-store-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteStoreIdb.getAllStores()).forEach(async (restaurant) => {
      await FavoriteStoreIdb.deleteStore(restaurant.id);
    });
  });

  itActsAsFavoriteStoreModel(FavoriteStoreIdb);
});
