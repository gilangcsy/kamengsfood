/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-duplicates */
import Detail from '../views/pages/detail';
import Explore from '../views/pages/explore';
import Favorite from '../views/pages/my-favorite';

const routes = {
  '/': Explore, // default page
  '/detail/:id': Detail,
  '/myfavorite': Favorite,
};

export default routes;
