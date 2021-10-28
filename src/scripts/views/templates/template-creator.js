import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
	<div class="column restaurant">
		<a href="#/detail/${restaurant.id}">
			<img src="${CONFIG.BASE_IMAGE_URL_SM}${restaurant.pictureId}" width="100%" alt="${restaurant.name}">
			<p class="catalog-title">${restaurant.name} - ${restaurant.city}</p>
			<p class="catalog-truncate">${restaurant.description}</p>
			<div class="catalog-rating">
				<img src="https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" width="15" alt="rating">
						${restaurant.rating}
			</div>
		</a>
    </div>
`;

const createDetailRestaurantTemplate = (restaurant) => `
	<div class="row grid-2">
		<div class="column">
			<div>
				<img src="${CONFIG.BASE_IMAGE_URL_SM}${restaurant.pictureId}" width="100%" alt="${restaurant.name}">
			</div>
		</div>
		<div class="column">
			<h1>
                ${restaurant.name}
            </h1>
			<ul>
				<li><b>Address : ${restaurant.address}, ${restaurant.city}</b></li>
				<li><b>Rating : ${restaurant.rating}</b></li>
			</ul>
			<br>
            <p>
                ${restaurant.description}
            </p>
			<ul class="tags">
				${restaurant.categories.map((category) => `
					<li class="category">${category.name}</li>
				`).join('')}
			</ul>
        </div>
    </div>

	<div class="row">
		<div class="column">
			<div class="header-text">
				Menu
			</div>
		</div>
	</div>

	<div class="row grid-2">
		<div class="column">
			<div class="header-text">
				Drinks
			</div>
			<br>
			<ul>
				${restaurant.menus.drinks.map((category) => `
					<li style="text-align:center; margin:10px;">${category.name}</li>
				`).join('')}
			</ul>
		</div>
		<div class="column">
			<div class="header-text">
				Foods
			</div>
			<br>
			<ul>
				${restaurant.menus.foods.map((category) => `
					<li style="text-align:center; margin:10px;">${category.name}</li>
				`).join('')}
			</ul>
		</div>
	</div>

	<div class="row">
		<div class="column">
			<div class="header-text">
				Reviews
			</div>
		</div>
	</div>

	<div class="row grid-auto">
		${restaurant.customerReviews.map((category) => `
			<div class="column">
				<div class="card">
					<div class="card-container">
						<h4><b>${category.name}</b> - ${category.date}</h4> 
						<p>${category.review}</p> 
					</div>
				</div>
			</div>
		`).join('')}
	</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
	createRestaurantListTemplate,
	createDetailRestaurantTemplate,
	createLikeButtonTemplate,
	createLikedButtonTemplate
};