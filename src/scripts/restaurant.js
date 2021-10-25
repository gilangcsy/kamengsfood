function getRestaurant(data) {
    let restaurantHTML = '';

    data.restaurants.forEach((resto, i) => {
        restaurantHTML += `
            <div class="column restaurant">
                <img src="${resto.pictureId}" width="100%" alt="${resto.name}">
                <p class="catalog-title">${resto.name} - ${resto.city}</p>
                <p class="catalog-truncate">${resto.description}</p>
                <div class="catalog-rating">
                    <img src="https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png" width="15" alt="rrating">
                    ${resto.rating}
                </div>
            </div>
        `;
    });

    document.getElementById('restaurants').innerHTML = restaurantHTML;
}

export default { getRestaurant };