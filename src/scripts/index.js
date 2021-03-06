/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/universal.css';
import '../styles/navigation.css';
import '../styles/catalog.css';
import '../styles/detail.css';
import '../styles/footer.css';
import './components/app-bar';
import './components/my-header';
import './components/my-footer';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

function getfocus() {
  document.getElementById('mainContent').focus();
}

document.getElementById('skip-link').addEventListener('click', (event) => {
  event.preventDefault();
  getfocus();
});
