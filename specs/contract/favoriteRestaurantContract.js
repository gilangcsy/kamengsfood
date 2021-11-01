/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteStoreModel = (favoriteStore) => {
  it('should return the restaurant that has been added', async () => {
    favoriteStore.putStore({ id: 1 });
    favoriteStore.putStore({ id: 2 });

    expect(await favoriteStore.getStore(1))
      .toEqual({ id: 1 });
    expect(await favoriteStore.getStore(2))
      .toEqual({ id: 2 });
    expect(await favoriteStore.getStore(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteStore.putStore({ aProperty: 'property' });

    expect(await favoriteStore.getAllStores())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteStore.putStore({ id: 1 });
    favoriteStore.putStore({ id: 2 });

    expect(await favoriteStore.getAllStores())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteStore.putStore({ id: 1 });
    favoriteStore.putStore({ id: 2 });
    favoriteStore.putStore({ id: 3 });

    await favoriteStore.deleteStore(1);

    expect(await favoriteStore.getAllStores())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteStore.putStore({ id: 1 });
    favoriteStore.putStore({ id: 2 });
    favoriteStore.putStore({ id: 3 });

    await favoriteStore.deleteStore(4);

    expect(await favoriteStore.getAllStores())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteStoreModel };
