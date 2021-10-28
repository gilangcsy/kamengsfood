import MyFavorite from '../views/pages/my-favorite';
import Detail from '../views/pages/detail';
import Explore from '../views/pages/explore';
import Favorite from '../views/pages/my-favorite';

const routes = {
	'/': Explore, // default page
	'/myfavorite': MyFavorite,
	'/detail/:id': Detail,
	'/myfavorite': Favorite,
};

export default routes;