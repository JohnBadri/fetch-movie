import { createElement } from './createElement';
import { displayPopularMovies } from './displayPopularMovies';

export async function popularMoviesPage() {
  const container = document.createElement('div');
  container.classList.add('popular');
  container.appendChild(createElement('h1', 'Popular Movies'));

  const movieDisplay = await displayPopularMovies();
  container.appendChild(movieDisplay);

  return container;
}
