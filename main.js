import './style.css';
import { header } from './header.js';
import { popularMoviesPage } from './popularMoviesPage.js';
import { popularTvPage } from './popularTvPage';
import { footer } from './footer.js';

const main = document.querySelector('#app');

const movieLoad = async function loadPopularMovies() {
  const popularMovies = await popularMoviesPage();
  main.appendChild(popularMovies);
};
const tvLoad = async function loadPopularTv() {
  const popularTv = await popularTvPage();
  main.appendChild(popularTv);
};

main.appendChild(header());
movieLoad().then(() => main.appendChild(footer()));

main.addEventListener('click', (e) => {
  const contentElem = document.querySelector('.popular');
  const footerElem = document.querySelector('footer');
  if (e.target.tagName === 'LI') {
    switch (e.target.textContent) {
      case 'Movies':
        if (contentElem) {
          contentElem.remove();
        }
        footerElem.remove();
        movieLoad().then(() => main.appendChild(footer()));
        break;
      case 'TV Shows':
        if (contentElem) {
          contentElem.remove();
        }
        footerElem.remove();
        tvLoad().then(() => main.appendChild(footer()));
        break;
      case 'Search':
        if (contentElem) {
          contentElem.remove();
        }
        break;
      default:
        break;
    }
  }
});
