import { createElement } from './createElement.js';

export function createMovieCard(
  id,
  imageUrl,
  movieTitle,
  movieOverview,
  movieRating
) {
  // Create the main card container with a class
  const card = createElement('div', null, 'movie-card');
  card.setAttribute('data-id', id);

  const img = createElement('img');
  img.src = 'https://image.tmdb.org/t/p/original/' + imageUrl;
  img.alt = `Poster of ${movieTitle}`;
  img.classList.add('movie-image');
  card.appendChild(img);

  const title = createElement('h3', movieTitle, 'movie-title');
  card.appendChild(title);

  const overview = createElement('p', movieOverview, 'movie-overview');
  card.appendChild(overview);

  const rating = createElement('p', `Rating: ${movieRating}`, 'movie-rating');
  card.appendChild(rating);

  return card;
}
