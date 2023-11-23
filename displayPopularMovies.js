import { getMovies } from './getMovies.js';
import { createMovieCard } from './createMovieCard.js';

export async function displayPopularMovies() {
  const movies = await getMovies();
  const container = document.createElement('div');
  container.classList.add('popular-movies-cards');
  movies.forEach((movie) => {
    container.appendChild(
      createMovieCard(
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
