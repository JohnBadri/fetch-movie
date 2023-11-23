import { getMethod } from './getMethod.js';
import { createCard } from './createCard.js';

export async function displayPopularTV() {
  const tv = await getMethod('https://api.themoviedb.org/3/tv/popular');
  const container = document.createElement('div');
  container.classList.add('popular-cards');
  tv.forEach((tvShow) => {
    container.appendChild(
      createCard(
        tvShow.id,
        tvShow.poster_path,
        tvShow.original_name,
        tvShow.overview,
        tvShow.vote_average
      )
    );
  });

  return container;
}
