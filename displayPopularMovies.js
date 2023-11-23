import { getMethod } from './getMethod.js';
import { createCard } from './createCard.js';

export async function displayPopularMovies() {
  const movies = await getMethod('https://api.themoviedb.org/3/movie/popular');
  const container = document.createElement('div');
  container.classList.add('popular-cards');
  movies.forEach((movie) => {
    container.appendChild(
      createCard(
        movie.id,
        movie.poster_path,
        movie.original_title,
        movie.overview,
        movie.vote_average
      )
    );
  });

  return container;
}
