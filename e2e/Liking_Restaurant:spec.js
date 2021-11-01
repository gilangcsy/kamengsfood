/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const assert = require('assert');

const messageEmptyFav = 'You dont have any favorite restaurant yet';
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/myfavorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(messageEmptyFav, '#restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(messageEmptyFav, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.restaurant a');

  const firstRestaurant = locate('.restaurant a').first();
  const firstRestaurantName = await I.grabTextFrom('.catalog-title');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/myfavorite');
  I.seeElement('.restaurant');

  const likedRestaurantTitle = await I.grabTextFrom('.catalog-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(messageEmptyFav, '#restaurants');

  I.amOnPage('/');

  I.seeElement('.restaurant a');

  const firstRestaurant = locate('.restaurant a').first();
  const firstRestaurantName = await I.grabTextFrom('.catalog-title');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/myfavorite');
  I.seeElement('.restaurant');

  const likedRestaurantTitle = await I.grabTextFrom('.catalog-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedRestaurantTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/myfavorite');
  I.seeElement('#restaurants');
  const noFavoriteAppear = await I.grabTextFrom('#restaurants');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavoriteAppear, messageEmptyFav);
});
