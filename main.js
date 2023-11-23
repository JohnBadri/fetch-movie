import './style.css';
import { popularMoviesPage } from './popularMoviesPage.js';

const main = document.querySelector('#app');

(async function loadPopularMovies() {
  const popularMovies = await popularMoviesPage();
  main.appendChild(popularMovies);
})();
