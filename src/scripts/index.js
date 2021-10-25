import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/universal.css';
import '../styles/navigation.css';
import '../styles/catalog.css';
import '../styles/footer.css';
import data from '../DATA.json';
import navigation from './navigation';
import restaurant from './restaurant';

console.log('Hello Coders! :)');

const navButtonOpen = document.querySelector("#navButtonOpen");
const navButtonClose = document.querySelector("#navButtonClose");

navButtonOpen.addEventListener('click', function () {
    navigation.openNav();
});

navButtonClose.addEventListener('click', function () {
    navigation.closeNav();
});

restaurant.getRestaurant(data);